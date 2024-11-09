import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const VitalsRecord = ({ dateAdd, temp, pulseRate, resprate, glucose, onEdit }) => {
  return (
    <View className="bg-white border-2 border-gray-200 rounded-3xl p-4 space-y-2 mb-3">

      <View className="flex-row justify-between">
        <Text className="text-pink-600 font-sfbold text-base mb-2">{dateAdd}</Text>
        <TouchableOpacity onPress={onEdit}>
          <MaterialIcons name="edit" size={22} color="gray" />
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-between mb-2">
        <Text className="text-base font-sfbold text-gray-400">Temperature</Text>
        <Text className="text-lg font-pbold text-pink-600">{temp}</Text>
      </View>

      <View className="flex-row justify-between mb-2">
        <Text className="text-base font-sfbold text-gray-400">Pulse Rate</Text>
        <Text className="text-base font-sfbold text-black">{pulseRate}</Text>
      </View>

      <View className="flex-row justify-between mb-2">
        <Text className="text-base font-sfbold text-gray-400">Respiratory Rate</Text>
        <Text className="text-base font-sfbold text-black">{resprate}</Text>
      </View>

      <View className="flex-row justify-between mb-2">
        <Text className="text-base font-sfbold text-gray-400">Blood Glucose</Text>
        <Text className="text-base font-sfbold text-black">{glucose}</Text>
      </View>

    </View>
  );
}

export default VitalsRecord;
