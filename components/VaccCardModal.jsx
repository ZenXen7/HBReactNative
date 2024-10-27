import { View, Text } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';

const VaccCardModal = ({ name, vaccine, fdose, sdose, issued, qrCodeIcon }) => {
  return (
    <View style={{ borderRadius: 20 }} className="bg-rose-600 p-6 space-y-6">

      {/* Header Section */}
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center space-x-2">
          <MaterialIcons name="vaccines" size={30} color="white" />
          <Text className="text-xl font-sfbold text-white">Vaccination Card</Text>
        </View>
        <Text className="text-xl font-sfmedium text-white">COVID-19</Text>
      </View>

      {/* User Information Section */}
      <View className="space-y-2">
        <View className="-space-y-5 mb-3">
          <Text className="text-sm font-sfmedium text-black">NAME</Text>
          <Text className="text-2xl font-sfbold text-white">{name}</Text>
        </View>
        
        <View className="-space-y-5 mb-3">
          <Text className="text-sm font-sfmedium text-black">VACCINE</Text>
          <Text className="text-xl font-sfbold text-white">{vaccine}</Text>
        </View>

        <View className="flex-row justify-between">
          <View className="-space-y-5 mb-3">
            <Text className="text-sm font-sfmedium text-black">DATE</Text>
            <Text className="text-xl font-sfbold text-white">{fdose}</Text>
          </View>
          <View className="pr-8 space-y-1">
            <Text className="text-sm font-sfmedium text-black">DATE</Text>
            <Text className="text-xl font-sfbold text-white">{sdose}</Text>
          </View>
        </View>

        <View className="space-y-1">
          <Text className="text-sm font-sfmedium text-black">ISSUED BY</Text>
          <Text className="text-xl font-sfbold text-white">{issued}</Text>
        </View>
      </View>

      {/* QR Code Section */}
      <View className="mt-4 items-center pt-7">
        <View style={{ backgroundColor: 'white', padding: 8, borderRadius: 4 }}>
          <QRCode 
            value="https://example.com/medical-info" 
            size={150} 
            backgroundColor="white"
          />
        </View>
      </View>
    </View>
  );
};

export default VaccCardModal;
