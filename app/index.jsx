import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';

export default function App() {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-primary h-full pt-safe">
      <ScrollView
        contentContainerStyle="flex-grow justify-center items-center px-4"
      >
        <View className="w-full items-center px-4">
        
          <Image
            source={images.hcard}
            className="max-w-md h-72 mb-9 mt-20 "
            resizeMode="contain"
          />

        
          <View className="w-full mt-3">
            <Text className="text-5xl text-black font-pbold text-left -ml-4 px-5">
              All-In-One medical history tracker
            </Text>

            <View className="w-full mt-6">
            <CustomButton
              title="Get Started"
              handlePress={() => router.push('/sign-in')}
              containerStyles="w-full bg-black rounded-3xl py-4"
              textStyle="text-white text-lg font-bold"
            />
          </View>

          </View>

          
          
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#000000" style="dark" />
    </SafeAreaView>
  );
}
