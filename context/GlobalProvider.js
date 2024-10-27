import React, { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser, getUserDetails, getUserInfo } from "../lib/appwrite"; // Import getUserInfo

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null); // State for user details
  const [userInfo, setUserInfo] = useState(null); // State for user info
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then(async (res) => {
        if (res) {
          setIsLogged(true);
          setUser(res);
          
          // Fetch user details
          const details = await getUserDetails(res.$id);
          setUserDetails(details); // Set user details

          // Fetch user info
          const info = await getUserInfo(); // Fetch user info based on account
          setUserInfo(info); // Set user info
        } else {
          setIsLogged(false);
          setUser(null);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        userDetails, // Provide userDetails
        userInfo, // Provide userInfo
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
