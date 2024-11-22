import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HealthDetails = () => {
  return (
    <SafeAreaView className="flex-1 bg-zinc-100">
      <ScrollView>
        {/* Profile Avatar */}
       

        {/* Health Details List */}
        <View className="px-4">
          {/* Personal Details Section */}
          <View className="bg-white rounded-lg mb-4">
            <View className="flex-row justify-between items-center border-b border-gray-200 p-4">
              <Text className="text-gray-800 font-sfbold text-lg">First Name</Text>
              <Text className="text-black font-sfmedium text-lg">Karl Christian</Text>
            </View>
            <View className="flex-row justify-between items-center border-b border-gray-200 p-4">
              <Text className="text-gray-800 font-sfbold text-lg">Last Name</Text>
              <Text className="text-black font-sfmedium text-lg">Ajero</Text>
            </View>
            <View className="flex-row justify-between items-center border-b border-gray-200 p-4">
              <Text className="text-gray-800 font-sfbold text-lg">Date of Birth</Text>
              <Text className="text-black font-sfmedium text-lg">Oct 16, 2004 (20)</Text>
            </View>
            <View className="flex-row justify-between items-center border-b border-gray-200 p-4">
              <Text className="text-gray-800 font-sfbold text-lg">Sex</Text>
              <Text className="text-black font-sfmedium text-lg">Male</Text>
            </View>
            <View className="flex-row justify-between items-center border-b border-gray-200 p-4">
              <Text className="text-gray-800 font-sfbold text-lg">Blood Type</Text>
              <Text className="text-gray-400 font-sfmedium text-lg">Not Set</Text>
            </View>
            
          </View>

          {/* Wheelchair Section */}
          <View className="bg-white shadow-sm rounded-lg mb-4">
            <View className="flex-row justify-between items-center border-b border-gray-200 p-4">
              <Text className="text-gray-800 font-sfbold text-lg">Wheelchair</Text>
              <Text className="text-black font-sfbold text-lg">No</Text>
            </View>
            <View className="p-4">
              <Text className="text-gray-500 text-sm font-sfmediu">
                Track pushes instead of steps on Apple Watch in the Activity app, and in wheelchair workouts in the
                Workout app, and record them to Health. When this setting is on, your iPhone stops tracking steps.
              </Text>
            </View>
          </View>

          {/* Medications Section */}
          <View className="bg-white shadow-sm rounded-lg">
            <View className="flex-row justify-between items-center border-b border-gray-200 p-4">
              <Text className="text-gray-800 font-sfbold text-lg">Medications That Affect Heart Rate</Text>
              <Text className="text-black font-sfbold text-lg">0</Text>
            </View>
            <View className="p-4">
              <Text className="text-gray-500 text-sm">
                Beta blockers or calcium channel blockers can limit your heart rate. Apple Watch can take this into
                account when estimating your cardio fitness.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HealthDetails;
