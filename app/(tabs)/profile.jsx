import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "../../constants"; // Ensure your icons are configur
import useAppwrite from "../../lib/useAppwrite";
import { signOut } from "../../lib/appwrite";
import { router } from "expo-router";
import { useGlobalContext } from "../../context/GlobalProvider";

const Profile = () => {
  const { user, userInfo, userDetails, setUser, setIsLogged } = useGlobalContext();

  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLogged(false);
    router.replace("/sign-in");
  };

  return (
    <SafeAreaView className="bg-zinc-100 flex-1">
      <ScrollView className="px-4">
        {/* Header */}
        <View className="flex-row justify-between items-center py-4">
          <Text className="text-black text-4xl font-sfbold ml-3"> </Text>
          <TouchableOpacity onPress={logout} className="mr-1">
            <Image
              source={icons.logout}
              resizeMode="contain"
              className="w-6 h-6"
            />
          </TouchableOpacity>
        </View>

        {/* Avatar */}
        <View className="items-center">
          <Image
            source={images.profile}
            className="w-20 h-20 rounded-full"
          />
          <Text className="text-black text-3xl font-sfbold mt-2">
            {userInfo?.userFullName || "User Name"}
          </Text>
        </View>

        {/* Sections */}
        <View className="mt-8">
          {/* Health Section */}
          <Text className="text-2xl font-pbold text-black ml-1">Health</Text>
          <View className="bg-white rounded-xl mt-2">
            <TouchableOpacity className="px-4 py-4 border-b border-zinc-200">
              <Text className="text-black text-lg font-sfmedium">Health Details</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-4">
              <Text className="text-black text-lg font-sfmedium">Medical ID</Text>
            </TouchableOpacity>
          </View>

          {/* Features Section */}
          <Text className="text-2xl font-pbold text-black mt-6 ml-1">Features</Text>
          <View className="bg-white rounded-xl mt-2">
            <TouchableOpacity className="px-4 py-4 border-b border-zinc-200">
              <Text className="text-black text-lg font-sfmedium">Health Checklist</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-4">
              <Text className="text-black text-lg font-sfmedium">Notifications</Text>
            </TouchableOpacity>
          </View>

          {/* Privacy Section */}
          <Text className="text-2xl font-pbold text-black mt-6 ml-1">Privacy</Text>
          <View className="bg-white rounded-xl mt-2">
            <TouchableOpacity className="px-4 py-4 border-b border-zinc-200">
              <Text className="text-black text-lg font-sfmedium">Apps</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-4 border-b border-zinc-200">
              <Text className="text-black text-lg font-sfmedium">Research Studies</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-4">
              <Text className="text-black text-lg font-sfmedium">Devices</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        
        {/* Privacy Note */}
        <Text className="text-xs text-zinc-600 mt-6 text-center mb-20">
          Your data is encrypted on your device and can only be shared with your
          permission.{" "}
          <Text className="text-blue-600 underline">Learn more...</Text>
        </Text>
        <View className="h-5" />
      </ScrollView>
    
    </SafeAreaView>
  );
};

export default Profile;
