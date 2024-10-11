import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';

export const config ={
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.healthbook',
    projectId: '67089c180003b43b4b4f',
    databaseId: '67089dd80001867a49cc',
    userCollectionId: '67089e0300103ab519ab',
    medicationHistoryId: '67089e42003c0e0a9d00',
    storageId: '6708a044001803db029b'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform) 

    const account = new Account(client);
    const avatars = new Avatars(client);
    const databases = new Databases(client);

export const createUser = async (email, password, username) => {

    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if(!newAccount) throw Error;
        const avatarUrl = avatars.getInitials(username)

        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
            accountId: newAccount.$id,
            email,
            username,
            avatar: avatarUrl

            }
        )

        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function signIn(email, password) {
    try {
        // Check if there's an existing session
        const session = await account.get();
        if (session) {
            console.log("User already signed in:", session.$id);
            return session; // User is already logged in
        }

        // Create a new session
        const newSession = await account.createEmailPasswordSession(email, password);
        return newSession;
    } catch (error) {
        console.error("Sign-in error:", error.message);
        throw new Error(error.message);
    }
}


