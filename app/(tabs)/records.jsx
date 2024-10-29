import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MedRecord from '../../components/MedRecord';

const Records = () => {
  const [activeTab, setActiveTab] = useState('Vaccination');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Medication':
        return (
          <View className="space-y-6">
            <MedRecord
              datePres="1.02.2019"
              diagnosis="Paracetamol"
              dosage="500mg Capsules"
              quantity="50"
              onEdit={() => console.log("Edit Medication")}
            />
              <MedRecord
              datePres="1.02.2019"
              diagnosis="Amoxicillin"
              dosage="1g Capsules"
              quantity="24"
              onEdit={() => console.log("Edit Medication")}
            />
          </View>
        );
      case 'Vaccination':
        return (
          <View className="space-y-6">
            <MedRecord
              date="18.01.2018"
              diagnosis="Dysautonomia"
              specialist="Specialist: Neurologist, Adam Green"
              clinic="Clinic: Moorgate Clinic"
              onEdit={() => console.log("Edit Dysautonomia")}
            />
            <MedRecord
              date="3.11.2017"
              diagnosis="URTI"
              specialist="Specialist: Therapist, Susan Bowl"
              clinic="Clinic: Top Health Clinic"
              onEdit={() => console.log("Edit URTI")}
            />
          </View>
        );
      case 'Vital Sign':
        return (
          <View className="space-y-6">
            <MedRecord
              date="24.10.2017"
              diagnosis="Vital Sign: Blood Pressure"
              specialist="Value: 120/80 mmHg"
              clinic="Recorded at: Wellness Clinic"
              onEdit={() => console.log("Edit Blood Pressure")}
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView className="bg-zinc-100 flex-1">
      {/* Header */}
      <View className="bg-zinc-100 py-4 px-4 flex-row position">
        <Text className="ml-3 text-black text-4xl font-sfbold">Records</Text>
      </View>

      <ScrollView>
        {/* Tab Navigation */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-5 px-4 space-x-6 ml-3">
          <TouchableOpacity onPress={() => setActiveTab('Medication')}>
            <Text className={activeTab === 'Medication' ? "text-blue-500 text-lg font-pbold" : "text-gray-400 text-lg font-pbold"}>
              Medication
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Vaccination')}>
            <Text className={activeTab === 'Vaccination' ? "text-blue-500 text-lg font-pbold" : "text-gray-400 text-lg font-pbold"}>
              Vaccination
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Vital Sign')}>
            <Text className={activeTab === 'Vital Sign' ? "text-blue-500 text-lg font-pbold" : "text-gray-400 text-lg font-pbold"}>
              Vitals
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Vital Sign')}>
            <Text className={activeTab === 'Vital Sign' ? "text-blue-500 text-lg font-pbold" : "text-gray-400 text-lg font-pbold"}>
              Family History
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Vital Sign')}>
            <Text className={activeTab === 'Vital Sign' ? "text-blue-500 text-lg font-pbold" : "text-gray-400 text-lg font-pbold"}>
             
            </Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Render Content Based on Active Tab */}
        <View className="my-6 px-4">
          {renderTabContent()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Records;
