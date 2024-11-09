import { View, Text } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const ProfileCard = ({ name, phone, location, gender, birthDate, qrCodeIcon, containerStyles }) => {
  return (
    <View style={{ borderRadius: 35, ...containerStyles }} className="bg-white p-6 space-y-4">
       {/* <View className="-mb-2">
          <Text className="text-2xl font-bold text-black">Profile Card</Text>
        </View> */}
      <View className="flex-row justify-between items-center">
        
        <Text className="text-blue-700 text-2xl font-sfbold">
          {name}
        </Text>
        {qrCodeIcon && <Ionicons name={qrCodeIcon} size={27} color="black" />}  
      </View>
      <View className="space-y-1.5">
        {phone && (
          <View className="flex-row items-center">
            <MaterialIcons name="phone" size={19} color="black" />
            <Text className="text-xs font-sfbold text-gray-500 ml-3">{phone}</Text>
          </View>
        )}
        
        {location && (
          <View className="flex-row items-center">
            <MaterialIcons name="location-on" size={19} color="black" />
            <Text className="text-xs  font-sfbold text-gray-500 ml-3">{location}</Text>
          </View>
        )}

        {gender && (
          <View className="flex-row items-center">
            <MaterialIcons name="person" size={19} color="black" />
            <Text className="text-xs font-sfbold text-gray-500 ml-3">{gender}</Text>
          </View>
        )}

        {birthDate && (
          <View className="flex-row items-center">
            <MaterialIcons name="cake" size={19} color="black" />
            <Text className="text-xs font-sfbold text-gray-500 ml-3">{birthDate}</Text>
          </View>
        )}
      </View>
    </View>
  )
}

export default ProfileCard;
