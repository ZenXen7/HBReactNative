import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const SurgicalRecord = ({ dateAdd, procedure, hospital, operDate, onEdit }) => {
  return (
    <View className="bg-white border-2 border-gray-200 rounded-3xl p-4 space-y-2 mb-3">
        <View className="flex-row justify-between">
            <Text className="text-emerald-600 font-sfbold text-base mb-2">{dateAdd}</Text>
            <TouchableOpacity onPress={onEdit}>
                <MaterialIcons name="edit" size={22} color="gray" />
            </TouchableOpacity>
        </View>

        <View className="flex-row justify-between mb-2">
            <Text className="text-base font-sfbold text-gray-400">Procedure</Text>
            <Text className="text-lg font-pbold text-emerald-600">{procedure}</Text>
        </View>
        <View className="flex-row justify-between mb-2">
            <Text className="text-base font-sfbold text-gray-400">Hospital</Text>
            <Text className="text-base font-sfbold text-black">{hospital}</Text>
        </View>
        <View className="flex-row justify-between mb-2">
            <Text className="text-base font-sfbold text-gray-400">Operation Date</Text>
            <Text className="text-base font-sfbold text-black">{operDate}</Text>
        </View>
        
    </View>
  )
}

export default SurgicalRecord