import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const FamRecord = ({ dateAdd, relation, condition, onEdit }) => {
    return (
        <View className="bg-white border-2 border-gray-200 rounded-3xl p-4 space-y-2 mb-3">
       
          <View className="flex-row justify-between">
            <Text className="text-orange-500 font-sfbold text-base mb-2">{dateAdd}</Text>
            <TouchableOpacity onPress={onEdit}>
              <MaterialIcons name="edit" size={22} color="gray" />
            </TouchableOpacity>
          </View>
          
       
          <View className="flex-row justify-between mb-2">
            <Text className="text-base font-sfbold text-gray-400">Relationship</Text>
            <Text className="text-lg font-pbold text-orange-600">{relation}</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-base font-sfbold text-gray-400">Condition Illness</Text>
            <Text className="text-base font-sfbold text-black">{condition}</Text>
          </View>
        
        </View>
    );
};

export default FamRecord;
