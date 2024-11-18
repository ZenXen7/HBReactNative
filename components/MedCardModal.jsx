import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';


const MedCardModal = ({ toggleModal, height, weight, hbeat, bmi, hemo, isModal, ethni, bloodP, bloodS, qrCodeIcon}) => {
    return (
        <View style={{ borderRadius: 35}} className="bg-black p-6 space-y-4">
          
          {/* Header Section */}
          <View className="flex-row justify-between">
            <Text className="text-2xl font-sfbold text-white">Medical Card</Text>
            <TouchableOpacity onPress={() => console.log("Edit clicked")} style={{ alignSelf: 'flex-end' }}>
              <MaterialIcons name="edit" size={24} color="skyblue" />
          </TouchableOpacity>

          </View>

          {/* Edit Button */}
         
          {/* Card Fields */}
          <View className="space-y-3">
            
            {/* Height */}
            {height && (
              <View className="flex-row justify-between">
                <Text className="text-sm font-sfmedium text-white">Height</Text>
                <Text className="text-xl font-sfbold text-white">{height}<Text className="text-base font-sfbold text-white">ft</Text></Text>
              </View>
            )}
    
            {/* Weight */}
            {weight && (
              <View className="flex-row justify-between">
                <Text className="text-sm font-sfmedium text-white">Weight</Text>
                <Text className="text-xl font-sfbold text-white">{weight}<Text className="text-base font-sfbold text-white">lbs</Text></Text>
              </View>
            )}
    
            {/* Heart Beat */}
            {hbeat && (
              <View className="flex-row justify-between">
                <Text className="text-sm font-sfmedium text-white">Heart Beat</Text>
                <Text className="text-xl font-sfbold text-white">{hbeat}<Text className="text-base font-sfbold text-white"> bpm</Text></Text>
              </View>
            )}
    
            {/* BMI */}
            {bmi && (
              <View className="flex-row justify-between">
                <Text className="text-sm font-sfmedium text-white">BMI</Text>
                <Text className="text-xl font-sfbold text-white">{bmi}</Text>
              </View>
            )}
    
            {/* Hemoglobin */}
            {hemo && (
              <View className="flex-row justify-between">
                <Text className="text-sm font-sfmedium text-white">Hemoglobin</Text>
                <Text className="text-xl font-sfbold text-white">{hemo}<Text className="text-base font-sfbold text-white"> gm</Text></Text>
              </View>
            )}
            
         
            {ethni && (
              <View className="flex-row justify-between">
                <Text className="text-sm font-sfmedium text-white">Ethnicity</Text>
                <Text className="text-xl font-sfbold text-white">{ethni}</Text>
              </View>
            )}

            {bloodP && (
              <View className="flex-row justify-between">
                <Text className="text-sm font-sfmedium text-white">Blood Pressure</Text>
                <Text className="text-xl font-sfbold text-white">{bloodP}<Text className="text-base font-sfbold text-white"> Hg</Text></Text>
              </View>
            )}

            {bloodS && (
              <View className="flex-row justify-between">
                <Text className="text-sm font-sfmedium text-white">Blood Sugar</Text>
                <Text className="text-xl font-sfbold text-white">{bloodS}<Text className="text-base font-sfbold text-white"> mg/dL</Text></Text>
              </View>
            )}

            {/* QR Code */}
            {/* <View className="mt-4 items-center">
              <QRCode value="https://example.com/medical-info" size={150} />
            </View> */}
             
            {qrCodeIcon && (
               <View className="flex-row justify-between pt-5">
               <Entypo name="share" size={28} color="white" />
             </View>
            )}
          </View>

       

        </View>
    );
};

export default MedCardModal;
