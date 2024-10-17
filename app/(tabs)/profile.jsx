import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { icons } from "../../constants";
import useAppwrite from '../../lib/useAppwrite';
import { signOut } from "../../lib/appwrite";
import { router } from 'expo-router';

import { useGlobalContext } from '../../context/GlobalProvider';

const Profile = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();

    const logout = async () => {
      await signOut();
      setUser(null);
      setIsLogged(false);
  
      router.replace("/sign-in");
    };

  return (
    <View className="w-full justify-center items-center mt-6 mb-12 px-4">
      <TouchableOpacity
        className="w-full items-end mb-10 mt-7"
        onPress={logout}  
      >
        <Image 
          source={icons.logout}
          resizeMode="contain"
          className="w-6 h-6"
        />
      </TouchableOpacity>
    </View>
  );
}

export default Profile;
