import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, Easing, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';

const RecordForm = ({ isVisible, onClose }) => {
  const [slideAnim] = useState(new Animated.Value(500)); // Starts off-screen


  React.useEffect(() => {
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
      }).start(() => onClose()); // Close after the animation
    }
  }, [isVisible]);

  return (
    
    <SafeAreaView className="flex-1 justify-end">
      <Animated.View
        style={{
          transform: [{ translateY: slideAnim }],
         
         
         
        
          height: 630,
        }}

        className="bg-zinc-100 border-t border-gray-200 p-5 "
      >
       <ScrollView>
        <View className="flex-row justify-between items-center mb-4">
          <TouchableOpacity onPress={() => onClose()}>
          <Text className="text-lg text-blue-600 font-sfbold ml-1">Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text className="text-lg text-blue-600 font-sfbold mr-1">Add</Text>
          </TouchableOpacity>
         
          
         
        </View>

      <View className="bg-white rounded-xl p-4 space-y-2 mb-3">
      <View className="">
          <TextInput
            placeholder="Diagnosis"
            className="border-b border-gray-300 pb-2  text-lg mb-3 font-sfbold"
          />
          <TextInput
            placeholder="Dosage"
            className="border-b border-gray-300 pb-2 text-lg mb-3 font-sfbold"
          />
          <TextInput
            placeholder="Quantity"
            className="border-b border-gray-300 pb-2 text-lg mb-3 font-sfbold"
          />
          <TextInput
            placeholder="Date Prescribed"
            className="border-b border-gray-300 pb-2 text-lg font-sfbold"
          />
        </View>

      </View>
     
      </ScrollView>

   
     
      </Animated.View>
    </SafeAreaView>
  );
};

export default RecordForm;
