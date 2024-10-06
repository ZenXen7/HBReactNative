import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';


import { images } from '../constants';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full justify-start items-center h-full px-4">
          <Image
            source={images.hblogo2}
            className="mt-4 w-[250px] h-[90px]"
            resizeMode="contain"
          ></Image>

          <Image 
          source={images.hcard}
          className="mt-6 max-w-[400px] w-full h-[320px]"
          resizeMode="contain"
          
          />

            <View className="relative">
              <Text className="text-3xl text-black font-sfbold text-center">Your all-in-one medical history tracker</Text>
            </View>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
}
