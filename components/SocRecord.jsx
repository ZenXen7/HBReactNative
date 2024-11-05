import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const SocRecord = ({ dateAdd, nicotine, alcohol, drug, diet, physical, onEdit }) => {
  return (
    <View className="bg-white border-2 border-gray-200 rounded-3xl p-4 space-y-2 mb-3">
       
          <View className="flex-row justify-between">
            <Text className="text-purple-500 font-sfbold text-base mb-2">{dateAdd}</Text>
            <TouchableOpacity onPress={onEdit}>
              <MaterialIcons name="edit" size={22} color="gray" />
            </TouchableOpacity>
          </View>
          
       
          <View className="flex-row justify-between mb-2">
            <Text className="text-base font-sfbold text-gray-400">Nicotine</Text>
            <Text className="text-lg font-sfbold text-black">{nicotine}</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-base font-sfbold text-gray-400">Alcohol</Text>
            <Text className="text-base font-sfbold text-black">{alcohol}</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-base font-sfbold text-gray-400">Drug</Text>
            <Text className="text-base font-sfbold text-black">{drug}</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-base font-sfbold text-gray-400">Diet</Text>
            <Text className="text-base font-sfbold text-black">{diet}</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-base font-sfbold text-gray-400">Physical Activity</Text>
            <Text className="text-base font-sfbold text-black">{physical}</Text>
          </View>
        </View>
    );
}

export default SocRecord