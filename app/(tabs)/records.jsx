import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MedRecord from '../../components/MedRecord';
import VacRecord from '../../components/VacRecord';
import SocRecord from '../../components/SocRecord';
import FamRecord from '../../components/FamRecord';

const Records = () => {
  const [activeTab, setActiveTab] = useState('Medication');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Medication':
        return (
          <View className="space-y-6">
            <MedRecord
              datePres="1/02/2019"
              diagnosis="Paracetamol"
              dosage="500mg Capsules"
              quantity="50"
              onEdit={() => console.log("Edit Medication")}
            />
              <MedRecord
              datePres="1/15/2019"
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
            <VacRecord
              dateAdd="10/16/2024"
              genName="Flu Vaccine"
              siteGiven="Upper Arm"
              doseMl="2 doses"
              nextDose="25.11.2024"
            />
            <VacRecord
              dateAdd="12/11/2024"
              genName="Flu Vaccine"
              siteGiven="Upper Arm"
              doseMl="2 doses"
              nextDose="25.11.2024"
            />

           <VacRecord
              dateAdd="1/3/2025"
              genName="Flu Vaccine"
              siteGiven="Upper Arm"
              doseMl="2 doses"
              nextDose="25.11.2024"
            />
          </View>
        );
      case 'Social':
        return (
          <View className="space-y-6">
            <SocRecord
              dateAdd="9/15/2019"
              nicotine="10 years smoking"
              alcohol="Occasional"
              drug="Marijuana"
              diet="High in carbs"
              physical="Regular Exercise"
            />
          </View>
        );
      case 'Family History':
        return(
          <View className="space-y-6">
          <FamRecord
            dateAdd="11/2/2024"
            relation="Mother"
            condition="Type 2 Diabetes"
          />
           <FamRecord
            dateAdd="11/2/2024"
            relation="Father"
            condition="High Blood Pressure"
          />
        </View>
        )
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
          <TouchableOpacity onPress={() => setActiveTab('Social')}>
            <Text className={activeTab === 'Social' ? "text-blue-500 text-lg font-pbold" : "text-gray-400 text-lg font-pbold"}>
              Social
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Family History')}>
            <Text className={activeTab === 'Family History' ? "text-blue-500 text-lg font-pbold" : "text-gray-400 text-lg font-pbold"}>
              Family
            </Text>
          </TouchableOpacity>
          <View>

          </View>
        </ScrollView>

        <View className="my-6 px-4">
          {renderTabContent()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Records;
