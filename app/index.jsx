import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 0.7, 
          justifyContent: 'center', 
          alignItems: 'center',
        }}
      >
        <View className="w-full items-center px-4">
          <Image
            source={images.hblogo2}
            className="mb-2 w-[250px] h-[110px]"
            resizeMode="contain"
          />

          <Image
            source={images.hcard}
            className="max-w-[400px] w-full h-[320px] mb-3"
            resizeMode="contain"
          />

          <View className="relative">
            <Text className="text-3xl text-black font-sfbold text-center">
              Your all-in-one medical history tracker
            </Text>
          </View>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#000000" style="dark" />
    </SafeAreaView>
  );
}
