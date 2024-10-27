import { View, Text, Image, ScrollView, Modal, TouchableOpacity, Animated, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { images } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from '../../components/ProfileCard';
import MedCard from '../../components/MedCard';
import { useGlobalContext } from '../../context/GlobalProvider';
import MedCardModal from '../../components/MedCardModal'; 
import VaccCardModal from '../../components/VaccCardModal';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import VaccCard from '../../components/VaccCard';

const Home = () => {
  const { user, userInfo, userDetails } = useGlobalContext();
  const [modalOpacity] = useState(new Animated.Value(0)); 
  const [modalTranslateY] = useState(new Animated.Value(100)); 

  const [isModalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState(null); // New state to track which modal
  console.log("User Details:", userDetails);
  console.log("User Details:", userInfo);
  const toggleModal = (type = null) => {
    if (isModalVisible) {
      Animated.timing(modalOpacity, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        setModalVisible(false);
        setModalType(null); // Reset modal type
      });
    } else {
      setModalType(type); // Set the type of modal to open
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
             name={userInfo?.userFullName || "Unknown Name"} // Replace with actual field from userInfo
             phone={userInfo?.phoneNum || "Unknown Phone"} // Adjust the field names as per your userInfo structure
             location={userInfo?.location || "Unknown Location"} // Same here
             gender={userInfo?.gender || "Unknown"} // Adjust accordingly
             birthDate={userInfo?.bday || "Unknown"} // Adjust accordingly
             qrCodeIcon="qr-code-outline"
             containerStyles={{ marginBottom: -15 }}
          />

          <TouchableOpacity onPress={() => toggleModal('medCard')} style={{ padding: 0, margin: 0 }}
          className="" activeOpacity={0.8} >
            <MedCard
             height={userDetails?.height || "Unknown"}
             weight={userDetails?.weight || "Unknown"}
             hbeat={userDetails?.hbeat || "Unknown"}
             bmi={userDetails?.bmi || "Unknown"}
             hemo={userDetails?.hemo || "Unknown"}
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
                    width: modalType === 'vaccCard' ? 383 : 350, // Set different widths for each modal type
                    padding: 20, 
                    borderRadius: 20,
                    opacity: modalOpacity, 
                    transform: [{ translateY: modalTranslateY }],
                  }}
                >
                  {modalType === 'vaccCard' ? (
                    <VaccCardModal
                      name={user?.username}
                      vaccine="Moderna COVID-19 Vaccine"
                      fdose="1/1/21"
                      sdose="1/29/21"
                      issued="Chong Hua Hospital"
                      qrCode="https://example.com/qr-code-url"
                    />
                  ) : (
                    <MedCardModal
                      height={userDetails?.height || "Unknown"}
                      weight={userDetails?.weight || "Unknown"}
                      hbeat={userDetails?.hbeat || "Unknown"}
                      bmi={userDetails?.bmi || "Unknown"}
                      hemo={userDetails?.hemo || "Unknown"}
                      ethni={userDetails?.ethni || "Unknown"}
                      bloodP={userDetails?.bloodP || "Unknown"}  
                      bloodS={userDetails?.bloodS || "Unknown"}  
                      qrCodeIcon="share"
                    />
                  )}
                </Animated.View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>

          {/* Vaccine Card Section */}
          <View className="flex-row justify-between pr-1">
            <TouchableOpacity 
              onPress={() => toggleModal('vaccCard')} 
              className="mr-2 flex-1 h-24 -mt-4"
              activeOpacity={0.8} 
            >
              <VaccCard 
                VaccinesIcon="VaccinesIcon"
                containerStyles="w-full h-full"
              />
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => toggleModal('medCard')} 
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
