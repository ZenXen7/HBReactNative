import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { images } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from '../../components/ProfileCard';
import MedCard from '../../components/MedCard';
import { useGlobalContext } from '../../context/GlobalProvider';

const Home = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();
  console.log(user?.username);
  return (
    <SafeAreaView className="bg-zinc-100 flex-1">
      <ScrollView>
      <View className="my-6 px-4 space-y-6">
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
              <Text className="text-2xl font-psemibold">{user?.username}</Text>
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

        <ProfileCard 
          name="Karl Christian Ajero"
          phone="+63 915 548 3788"
          location="Paper St. Fight Club, Cebu"
          gender="Male"
          birthDate="October 16, 2004"
          qrCodeIcon="qr-code-outline"
          containerStyles={{ marginBottom: 5 }}
        /> 

      
        <MedCard
          height="5.8"
          weight="135"
          hbeat="160"
          bmi="28.5"
          hemo="13"
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
