import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const VacRecord = ({dateAdd, genName, siteGiven, doseMl, nextDose, onEdit}) => {
    return (
        <View className="bg-white border-2 border-gray-200 rounded-3xl p-4 space-y-2 mb-3">
       
          <View className="flex-row justify-between">
            <Text className="text-red-500 font-sfbold text-base mb-2">{dateAdd}</Text>
            <TouchableOpacity onPress={onEdit}>
              <MaterialIcons name="edit" size={22} color="gray" />
            </TouchableOpacity>
          </View>
          
       
          <View className="flex-row justify-between mb-2">
            <Text className="text-base font-sfbold text-gray-400">Vaccine Name</Text>
            <Text className="text-lg font-pbold text-red-600">{genName}</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-base font-sfbold text-gray-400">Site</Text>
            <Text className="text-base font-sfbold text-black">{siteGiven}</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-base font-sfbold text-gray-400">Dose</Text>
            <Text className="text-base font-sfbold text-black">{doseMl}</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-base font-sfbold text-gray-400">Next Dose</Text>
            <Text className="text-base font-sfbold text-black">{nextDose}</Text>
          </View>
        </View>
    );
}

export default VacRecord