import { View, Text, Image, ScrollView, Modal, TouchableOpacity, Animated, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { images } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from '../../components/ProfileCard';
import MedCard from '../../components/MedCard';
import { useGlobalContext } from '../../context/GlobalProvider';
import MedCardModal from '../../components/MedCardModal'; 
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import VaccCard from '../../components/VaccCard';

const Home = () => {
  const { user } = useGlobalContext();
  const [modalOpacity] = useState(new Animated.Value(0)); 
  const [modalTranslateY] = useState(new Animated.Value(100)); 

  const [isModalVisible, setModalVisible] = useState(false);
  
  const toggleModal = () => {
    if (isModalVisible) {
      Animated.timing(modalOpacity, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start(() => setModalVisible(false)); 
    } else {
      setModalVisible(true);
      Animated.timing(modalOpacity, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start();
      Animated.timing(modalTranslateY, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <SafeAreaView className="bg-zinc-100 flex-1">
      <ScrollView>
        <View className="my-6 px-4 space-y-6">
          {/* User Profile Section */}
          <View className="flex-row justify-between items-center mb-6">
            <View className="flex-row items-center">
              <Image
                source={images.profile}
                className="w-12 h-12 rounded-full mr-3"
                resizeMode="cover"
              />
              <View className="ml-2">
                <Text className="font-pmedium text-sm text-black">Welcome back,</Text>
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

          {/* Profile Card */}
          <ProfileCard 
            name="Karl Christian Ajero"
            phone="+63 915 548 3788"
            location="Paper St. Fight Club, Cebu"
            gender="Male"
            birthDate="October 16, 2004"
            qrCodeIcon="qr-code-outline"
            containerStyles={{ marginBottom: -15 }}
          />

          <TouchableOpacity onPress={toggleModal} style={{ padding: 0, margin: 0 }}
          className="" activeOpacity={0.8} >
            
            <MedCard
              height="5.8"
              weight="135"
              hbeat="160"
              bmi="28.5"
              hemo="13"
              
            />
          </TouchableOpacity>

          {/* Modal */}
          <Modal
            visible={isModalVisible}
            transparent={true}
            animationType="none" 
            onRequestClose={toggleModal}
          >
            <TouchableWithoutFeedback onPress={toggleModal}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <Animated.View
                  style={{
                    width: 350, 
                    padding: 20, 
                    borderRadius: 20,
                    opacity: modalOpacity, 
                    transform: [{ translateY: modalTranslateY }],
                  }}
                >
                  <MedCardModal
                    toggleModal={toggleModal}
                    height="5.8"
                    weight="135"
                    hbeat="160"
                    bmi="28.5"
                    hemo="13"
                    ethni="Hispanic"
                    bloodP="120 Hg"
                    bloodS="70mg/dL"
                    qrCodeIcon="qr-code-outline"
                  />
                </Animated.View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>

     
      <View className="flex-row justify-between pr-1 ">
        <TouchableOpacity 
            onPress={toggleModal} 
            className="mr-2 flex-1 h-24 -mt-4"
            activeOpacity={0.8} 
            >
            <VaccCard 
                VaccinesIcon="VaccinesIcon"
                containerStyles="w-full h-full"
            />
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={toggleModal} 
            className="flex-1 h-24 -mt-4"
            activeOpacity={0.8}
        >
            <VaccCard containerStyles="w-full h-full"/>
        </TouchableOpacity>
         </View>

          <View></View>
          <View></View>
          <View></View>
          <View></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
