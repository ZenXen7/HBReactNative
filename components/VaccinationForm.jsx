import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, Easing, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';

const VaccinationForm = ({ isVisible, onClose }) => {
  const [slideAnim] = useState(new Animated.Value(500));
  const [date, setDate] = useState(new Date());
  const [nextDose, setNextDose] = useState(new Date());  // Add state for Next Dose
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isNextDose, setIsNextDose] = useState(false); // Flag to distinguish between Date and Next Dose picker

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      if (isNextDose) {
        setNextDose(selectedDate);  // Update Next Dose date
      } else {
        setDate(selectedDate);  // Update Date
      }
    }
  };

  const closeDatePicker = () => setShowDatePicker(false);

  useEffect(() => {
    if (isVisible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 500,
        duration: 300,
        useNativeDriver: true,
      }).start(() => onClose());
    }
  }, [isVisible]);

  const handleNextDoseClick = () => {
    setIsNextDose(true);  
    setShowDatePicker(true);  
  };

  return (
    <SafeAreaView className="flex-1 justify-end">
      <Animated.View
        style={{
          transform: [{ translateY: slideAnim }],
          height: 630,
        }}
        className="bg-zinc-100 border-t border-gray-200 p-4"
      >
        <ScrollView>
          <View className="flex-row justify-between items-center mb-4">
            <TouchableOpacity onPress={() => onClose()}>
              <Text className="text-lg text-blue-600 font-sfbold ">Cancel</Text>
            </TouchableOpacity>
            <Text className="text-xl text-black font-pbold pr-2">Vaccination</Text>
            <TouchableOpacity>
              <Text className="text-lg text-blue-600 font-sfbold ">Add</Text>
            </TouchableOpacity>
          </View>

          <View className="bg-white rounded-xl p-4 space-y-2 mb-3 mt-6">
         
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <View className="flex-row justify-between items-center border-b border-gray-300 pb-2 mb-3">
                <Text className="text-lg font-sfbold text-gray-400">Date</Text>
                <Text className="text-lg font-sfbold text-red-600">{date.toLocaleDateString()}</Text>
              </View>
            </TouchableOpacity>

         
            <View className="flex-row justify-between items-center border-b border-gray-300 pb-2 mb-3">
              <Text className="text-lg font-sfbold text-gray-400">Vaccine Name</Text>
              <TextInput
                placeholder="Pfizer"
                onFocus={closeDatePicker}
                className="text-lg font-sfbold flex-1"
                style={{
                  textAlign: 'right',
                  paddingVertical: 0, 
                  lineHeight: 22, 
                }}
              />
            </View>

         
            <View className="flex-row justify-between items-center border-b border-gray-300 pb-2 mb-3">
              <Text className="text-lg font-sfbold text-gray-400">Site</Text>
              <TextInput
                placeholder="Right Arm"
                onFocus={closeDatePicker}
                className="text-lg font-sfbold flex-1"
                style={{
                  textAlign: 'right',
                  paddingVertical: 0, 
                  lineHeight: 22, 
                }}
              />
            </View>

          
            <View className="flex-row justify-between items-center border-b border-gray-300 pb-2 mb-3">
              <Text className="text-lg font-sfbold text-gray-400">Dose</Text>
              <TextInput
                placeholder="0"
                onFocus={closeDatePicker}
                className="text-lg font-sfbold flex-1"
                style={{
                  textAlign: 'right',
                  paddingVertical: 0,
                  lineHeight: 22,
                }}
                keyboardType="numeric" 
              />
            </View>

       
            <TouchableOpacity onPress={handleNextDoseClick}>
              <View className="flex-row justify-between items-center">
                <Text className="text-lg font-sfbold text-gray-400">Next Dose</Text>
                <Text className="text-lg font-sfbold text-black">
                  {nextDose.toLocaleDateString()}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animated.View>

    
      {showDatePicker && (
        <View style={{ position: 'absolute', bottom: 50, width: '100%', backgroundColor: 'white' }}>
          <DateTimePicker
            value={isNextDose ? nextDose : date}
            mode="date"
            display="spinner"
            onChange={handleDateChange}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default VaccinationForm;
