import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const MedRecord = ({ datePres, diagnosis, dosage, quantity, onEdit }) => {
    return (
        <View className="bg-white  rounded-xl p-4 space-y-2 mb-4">
       
          <View className="flex-row justify-between">
            <Text className="text-blue-500 font-sfbold text-base mb-2">{datePres}</Text>
            <TouchableOpacity onPress={onEdit}>
              <MaterialIcons name="edit" size={22} color="gray" />
            </TouchableOpacity>
          </View>
          
       
          <View className="flex-row justify-between mb-2">
            <Text className="text-base font-sfbold text-gray-400">Generic Name</Text>
            <Text className="text-lg font-sfbold text-blue-600">{diagnosis}</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-base font-sfbold text-gray-400">Dosage</Text>
            <Text className="text-base font-sfbold text-black">{dosage}</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-base font-sfbold text-gray-400">Quantity</Text>
            <Text className="text-base font-sfbold text-black">{quantity}</Text>
          </View>
        </View>
    );
};

export default MedRecord;
