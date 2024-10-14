import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const Home = () => {
  return (
    <SafeAreaView className="bg-neutral-100 flex-1">
      <View className="my-6 px-4 space-y-6">
        {/* Welcome Back Section */}
        <View className="flex-row justify-between items-center mb-6">
          <View className="flex-row items-center">
            {/* Profile Picture */}
            <Image
              source={images.profile} 
              className="w-12 h-12 rounded-full mr-3"
              resizeMode="cover"
            />
            <View className="ml-2">
              <Text className="font-pmedium text-sm text-black">
                Welcome back,
              </Text>
              <Text className="text-2xl font-psemibold">kcisntreal</Text>
            </View>
          </View>
          <View className="mt-1.5">
            <Image
              source={images.hblogosmall}
              className="w-12 h-12"
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Profile Card */}
        <View className="bg-black p-4 shadow-sm space-y-4 rounded-2xl">
          <View className="flex-row justify-between items-center">
            <Text className="text-white text-lg font-pbold">
              Karl Christian Ajero
            </Text>
            <Ionicons name="qr-code-outline" size={24} color="white" />
          </View>
          <View className="space-y-2">
        
            <View className="flex-row items-center">
              <MaterialIcons name="phone" size={20} color="white" />
              <Text className="text-xs text-white ml-2">+63 915 548 3788</Text>
            </View>
            
            <View className="flex-row items-center">
              <MaterialIcons name="location-on" size={20} color="white" />
              <Text className="text-xs text-white ml-2">Paper St. Fight Club, Cebu</Text>
            </View>

            <View className="flex-row items-center">
              <MaterialIcons name="person" size={20} color="white" />
              <Text className="text-xs text-white ml-2">Male</Text>
            </View>

            <View className="flex-row items-center">
              <MaterialIcons name="cake" size={20} color="white" />
              <Text className="text-xs text-white ml-2">October 16, 2004</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home;
