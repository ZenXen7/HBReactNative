import { View, Text, Image, TouchableOpacity, ScrollView, Switch } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "../../constants"; // Ensure your icons are configured
import useAppwrite from "../../lib/useAppwrite";
import { signOut } from "../../lib/appwrite";
import { router } from "expo-router";
import { useGlobalContext } from "../../context/GlobalProvider";
import HealthDetails from "../subs/HealthDetails";


const Profile = () => {
  const { user, userInfo, userDetails, setUser, setIsLogged } = useGlobalContext();

  // Manage dark mode toggle state
  const [isDarkMode, setIsDarkMode] = useState(false);

  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLogged(false);
    router.replace("/sign-in");
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <SafeAreaView className={`${isDarkMode ? "bg-zinc-900" : "bg-zinc-100"} flex-1`}>
      <ScrollView className="px-4">
      
        <View className="flex-row justify-between items-center py-4">
          <Text className={`${isDarkMode ? "text-white" : "text-black"} text-4xl font-sfbold ml-3`}> </Text>
          <TouchableOpacity onPress={logout} className="mr-1">
            <Image source={icons.logout} resizeMode="contain" className="w-6 h-6" />
          </TouchableOpacity>
        </View>


        <View className="items-center">
          <Image source={images.profile} className="w-20 h-20 rounded-full" />
          <Text className={`${isDarkMode ? "text-white" : "text-black"} text-3xl font-sfbold mt-2`}>
            {userInfo?.userFullName || "User Name"}
          </Text>
        </View>

   
        <View className="mt-8">
   
          <Text className={`${isDarkMode ? "text-white" : "text-black"} text-2xl font-pbold ml-1`}>Health</Text>
          <View className={`${isDarkMode ? "bg-zinc-800" : "bg-white"} rounded-xl mt-2`}>
            <TouchableOpacity
              className="px-4 py-4"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: isDarkMode ? "#444" : "#e2e2e2", // Dark gray in dark mode
              }}
              onPress={() => router.push("subs/HealthDetails")} // Navigate to HealthDetails
            >
              <Text className={`${isDarkMode ? "text-white" : "text-black"} text-lg font-sfmedium`}>Health Details</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-4">
              <Text className={`${isDarkMode ? "text-white" : "text-black"} text-lg font-sfmedium`}>Medical ID</Text>
            </TouchableOpacity>
          </View>

      
          <Text className={`${isDarkMode ? "text-white" : "text-black"} text-2xl font-pbold mt-6 ml-1`}>Features</Text>
          <View className={`${isDarkMode ? "bg-zinc-800" : "bg-white"} rounded-xl mt-2`}>
            <TouchableOpacity
              className="px-4 py-4"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: isDarkMode ? "#444" : "#e2e2e2", // Dark gray in dark mode
              }}
            >
              <Text className={`${isDarkMode ? "text-white" : "text-black"} text-lg font-sfmedium`}>Health Checklist</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-4">
              <Text className={`${isDarkMode ? "text-white" : "text-black"} text-lg font-sfmedium`}>Notifications</Text>
            </TouchableOpacity>
          </View>

        
          <Text className={`${isDarkMode ? "text-white" : "text-black"} text-2xl font-pbold mt-6 ml-1`}>Privacy</Text>
          <View className={`${isDarkMode ? "bg-zinc-800" : "bg-white"} rounded-xl mt-2`}>
            <TouchableOpacity
              className="px-4 py-4"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: isDarkMode ? "#444" : "#e2e2e2", // Dark gray in dark mode
              }}
            >
              <Text className={`${isDarkMode ? "text-white" : "text-black"} text-lg font-sfmedium`}>Apps</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="px-4 py-4"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: isDarkMode ? "#444" : "#e2e2e2", // Dark gray in dark mode
              }}
            >
              <Text className={`${isDarkMode ? "text-white" : "text-black"} text-lg font-sfmedium`}>Research Studies</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-4">
              <Text className={`${isDarkMode ? "text-white" : "text-black"} text-lg font-sfmedium`}>Devices</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-4 items-center">
          <View className="flex-row items-center space-x-2">
            <Text className={`${isDarkMode ? "text-white" : "text-black"} text-lg`}>Dark Mode</Text>
            <Switch
              value={isDarkMode}
              onValueChange={toggleDarkMode}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
            />
          </View>
        </View>
    
        <Text className={`${isDarkMode ? "text-zinc-400" : "text-zinc-600"} text-xs mt-6 text-center mb-4`}>
          Your data is encrypted on your device and can only be shared with your permission.{" "}
          <Text className="text-blue-600 underline">Learn more...</Text>
        </Text>

      
        <View className="h-10" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
