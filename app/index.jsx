import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
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
            source={images.hblogo}
            className="mt-5 w-[230px] h-[84px]"
            resizeMode="contain"
          ></Image>

         
        </View>


      </ScrollView>
    </SafeAreaView>
  );
}

