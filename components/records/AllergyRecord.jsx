import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const AllergyRecord = ({ dateAdd, substance, severity, critical, onEdit}) => {
  return (
    <View className="bg-white border-2 border-gray-200 rounded-3xl p-4 space-y-2 mb-3">
    
    <View className="flex-row justify-between">
            <Text className="text-indigo-600 font-sfbold text-base mb-2">{dateAdd}</Text>
            <TouchableOpacity onPress={onEdit}>
              <MaterialIcons name="edit" size={22} color="gray" />
            </TouchableOpacity>
          </View>


          <View className="flex-row justify-between mb-2">
            <Text className="text-base font-sfbold text-gray-400">Substance</Text>
            <Text className="text-lg font-pbold text-indigo-600">{substance}</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-base font-sfbold text-gray-400">Severity</Text>
            <Text className="text-base font-sfbold text-black">{severity}</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-base font-sfbold text-gray-400">Criticality</Text>
            <Text className="text-base font-sfbold text-black">{critical}</Text>
          </View>



    </View>
  )
}

export default AllergyRecord