import { Account, Avatars, Client, Databases, ID, Query, Storage } from 'react-native-appwrite';

export const config ={
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.healthbook',
    projectId: '67089c180003b43b4b4f',
    databaseId: '67089dd80001867a49cc',
    userCollectionId: '67089e0300103ab519ab',
    userDetailsId: '670d20c600172cf1140f',
    medicationHistoryId: '67089e42003c0e0a9d00',
    userInfoId: '671e52a1002f195cb02e',
    vaccCardId: '6720e5ab00240aa269c9',
    medicationRecordId: '6730d105003ba40f01a8',
    storageId: '6708a044001803db029b'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform) 

    const account = new Account(client);
    
    const storage = new Storage(client);
    const avatars = new Avatars(client);
    const databases = new Databases(client);
    

    export async function createUser(email, password, username) {
        try {
          const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
          );
      
          if (!newAccount) throw Error;
      
          const avatarUrl = avatars.getInitials(username);
      
          await signIn(email, password);
      
          const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
              accountId: newAccount.$id,
              email: email,
              username: username,
              avatar: avatarUrl,
            }
          );
      
          return newUser;
        } catch (error) {
          throw new Error(error);
        }
      }
export async function signIn(email, password) {
    try {
      const session = await account.createEmailPasswordSession(email, password);
  
      return session;
    } catch (error) {
      throw new Error(error);
    }
  }

  export async function getAccount() {
    try {
      const currentAccount = await account.get();
  
      return currentAccount;
    } catch (error) {
      throw new Error(error);
    }
  }


  export async function getCurrentUser() {
    try {
      const currentAccount = await getAccount();
      if (!currentAccount) throw Error;
  
      const currentUser = await databases.listDocuments(
        config.databaseId,
        config.userCollectionId,
        [Query.equal("accountId", currentAccount.$id)]
      );
  
      if (!currentUser) throw Error;
  
      return currentUser.documents[0];
    } catch (error) {
      console.log(error);
      return null;
    }
  }


  export const getUserDetails = async () => {
    try {
        const currentAccount = await getAccount(); 
        if (!currentAccount) throw new Error("User is not logged in.");

        const userDetailsResponse = await databases.listDocuments(
            config.databaseId,
            config.userDetailsId, 

        );

        if (userDetailsResponse.total === 0) {
            throw new Error("No user details found for the current account.");
        }

        return userDetailsResponse.documents[0]; 
    } catch (error) {
        console.error("Error fetching user details:", error);
        return null;
    }
};

export const getUserInfo = async () => {
  try {
      const currentAccount = await getAccount(); 
      if (!currentAccount) throw new Error("User is not logged in.");

      const userDetailsResponse = await databases.listDocuments(
          config.databaseId,
          config.userInfoId, 

      );

      if (userDetailsResponse.total === 0) {
          throw new Error("No user details found for the current account.");
      }

      return userDetailsResponse.documents[0]; 
  } catch (error) {
      console.error("Error fetching user info:", error);
      return null;
  }
};

export const getUserVaccCard = async () => {
  try {
    const currentAccount = await getAccount();
    if(!currentAccount) throw new Error("User is not logged in.");

    const VaccCardDetailsResponse = await databases.listDocuments(
      config.databaseId,
      config.vaccCardId,
    );

    if(VaccCardDetailsResponse.total === 0){
      throw new Error("No Vaccination Card found.");
    }

    return VaccCardDetailsResponse.documents[0];


  }catch(error){
    console.error("Error fetching user info:", error);
  }
}

export const getUserMedicalRecords = async () => {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) throw new Error("User is not logged in.");

    const MedRecordResponse = await databases.listDocuments(
      config.databaseId,
      config.medicationRecordId,
    );

    if (MedRecordResponse.total === 0) {
      throw new Error("No Medical Records found.");
    }

    return MedRecordResponse.documents; // Return an array of all records
  } catch (error) {
    console.error("Error fetching user medical records:", error);
    return null;
  }
};



export const addMedicationRecord = async (date, genericName, dosage, quantity) => {
  try {
    const parsedDosage = parseInt(dosage, 10);
    const parsedQuantity = parseInt(quantity, 10);

    if (isNaN(parsedDosage) || isNaN(parsedQuantity)) {
      Alert.alert("Error", "Dosage and Quantity must be valid integers.");
      return;
    }

    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
      const day = date.getDate().toString().padStart(2, '0');
      
      return `${month}-${day}-${year}`;  
    };

    
    const medicationRecordData = {
      dateAdded: formatDate(date),
      genericName,
      dosage: parsedDosage,
      quantity: parsedQuantity,
    };

    const response = await databases.createDocument(
      config.databaseId,
      config.medicationRecordId,
      ID.unique(),
      medicationRecordData
    );

    console.log("Medication record added:", response);
    return response;  // Return the created record
  } catch (error) {
    console.error("Error adding medication record:", error);
    Alert.alert("Error", "Failed to add medication record. Please try again.");
  }
};


export const signOut = async () => {
    try {
        const session = await account.deleteSession('current');
        return session;
    } catch (error) {
        throw new Error(error)
    }
}