import { View, Text } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const MedCard = ({ height, weight, hbeat, bmi, hemo, ethni, containerStyles, isModal }) => {
  return (
    <View style={{ borderRadius: 35, ...containerStyles }} className="bg-white p-6 space-y-4">
      <View className="space-y-3">
        {/* Height */}
        {height && (
          <View className="flex-row justify-between">
            <Text className="text-sm font-sfmedium text-gray-500">Height</Text>
            <Text className="text-xl font-sfbold text-black">{height}<Text className="text-base font-sfbold text-black">ft</Text></Text>
          </View>
        )}

        {/* Weight */}
        {weight && (
          <View className="flex-row justify-between">
            <Text className="text-sm font-sfmedium text-gray-500">Weight</Text>
            <Text className="text-xl font-sfbold text-black">{weight}<Text className="text-base font-sfbold text-black">lbs</Text></Text>
          </View>
        )}

        {/* Heart Beat */}
        {hbeat && (
          <View className="flex-row justify-between">
            <Text className="text-sm font-sfmedium text-gray-500">Heart Beat</Text>
            <Text className="text-xl font-sfbold text-black">{hbeat}<Text className="text-base font-sfbold text-black"> bpm</Text></Text>
          </View>
        )}

        {/* BMI */}
        {bmi && (
          <View className="flex-row justify-between">
            <Text className="text-sm font-sfmedium text-gray-500">BMI</Text>
            <Text className="text-xl font-sfbold text-black">{bmi}</Text>
          </View>
        )}

        {/* Hemoglobin */}
        {hemo && (
          <View className="flex-row justify-between">
            <Text className="text-sm font-sfmedium text-gray-500">Hemoglobin</Text>
            <Text className="text-xl font-sfbold text-black">{hemo}<Text className="text-base font-sfbold text-black"> gm</Text></Text>
          </View>
        )}
        
       
        {isModal && (
          <View className="flex-row justify-between">
          <Text className="text-sm font-sfmedium text-gray-500">Ethnicity</Text>
          <Text className="text-xl font-sfbold text-black">{ethni}<Text className="text-base font-sfbold text-black"></Text></Text>
        </View>
        )}
      </View>
    </View>
  );
};

export default MedCard;
