import { View, Text, ScrollView, TouchableOpacity, Modal, Animated, Easing } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import MedRecord from '../../components/records/MedRecord';
import VacRecord from '../../components/records/VacRecord';
import SocRecord from '../../components/records/SocRecord';
import FamRecord from '../../components/records/FamRecord';
import SurgicalRecord from '../../components/records/SurgicalRecord';
import AllergyRecord from '../../components/records/AllergyRecord';
import AntDesign from '@expo/vector-icons/AntDesign';
import MedicationForm from '../../components/forms/MedicationForm';
import VaccinationForm from '../../components/forms/VaccinationForm';
import FamilyForm from '../../components/forms/FamilyForm';
import SurgicalForm from '../../components/forms/SurgicalForm';
import AllergyForm from '../../components/forms/AllergyForm';
import VitalsRecord from '../../components/records/VitalsRecord';
import { useGlobalContext } from '../../context/GlobalProvider';



const Records = () => {
  const { user, userInfo, userDetails, medRecord} = useGlobalContext();
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState('Medication');
  
  const slideAnim = useRef(new Animated.Value(0)).current;

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.in(Easing.ease),
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Medication':
        return (
          <View className="space-y-6">
          {medRecord?.map((record) => (
            <MedRecord
              key={record.$id}  
              datePres={record.dateAdded}
              diagnosis={record.genericName}
              dosage={record.dosage} 
              quantity={record.quantity || 'N/A'}  
              onEdit={() => console.log("Edit Medication")}
            />

            
          ))}
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
              nextDose="25/11/2024"
            />
            {/* More VacRecords can go here */}

            <VacRecord
              dateAdd="10/16/2024"
              genName="Polio"
              siteGiven="Upper Arm"
              doseMl="2 doses"
              nextDose="NA"
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
        return (
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
        );
      case 'Surgical':
        return (
          <View className="space-y-6" >
              <SurgicalRecord
                dateAdd="16/5/2019"
                procedure="Penis Removal"
                hospital="Cebu Doctors Hospital"
                operDate="24/5/2008"
              />
          </View>
        );
      case 'Allergy':
        return (
          <View className="space-y-6">
            <AllergyRecord
              dateAdd="2/5/2017"
              substance="Shell Fish"
              severity="Severe"
              critical="High"
            />
            <AllergyRecord
              dateAdd="2/8/2017"
              substance="Peanut"
              severity="Severe"
              critical="High"
            />
          </View>
        )
      case 'Vitals':
        return (
          <View className="space-y-6" >
              <VitalsRecord
                dateAdd="2/7/2016"
                temp="37.2"
                pulseRate="75bpm"
                resprate="16bpm"
                glucose="110 mg"
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
      <View className="bg-zinc-100 py-4 px-4 flex-row position justify-between">
        <Text className="ml-3 text-black text-4xl font-sfbold">Records</Text>
        <TouchableOpacity className="mr-2 mt-2">
          <AntDesign name="addfile" size={24} color="blue" />
          </TouchableOpacity> 
       
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
          <TouchableOpacity onPress={() => setActiveTab('Surgical')}>
            <Text className={activeTab === 'Surgical' ? "text-blue-500 text-lg font-pbold" : "text-gray-400 text-lg font-pbold"}>
              Surgical
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Allergy')}>
            <Text className={activeTab === 'Allergy' ? "text-blue-500 text-lg font-pbold" : "text-gray-400 text-lg font-pbold"}>
              Allergy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Vitals')}>
            <Text className={activeTab === 'Vitals' ? "text-blue-500 text-lg font-pbold" : "text-gray-400 text-lg font-pbold"}>
              Vitals
            </Text>
          </TouchableOpacity>
          <View></View>
          <View></View>
        </ScrollView>

        <View className="my-6 px-4">
          {renderTabContent()}
        </View>
      </ScrollView>

     
      {showForm && (
        activeTab === 'Medication' ? (
          <MedicationForm
            isVisible={showForm}
            onClose={() => setShowForm(false)}
          />
        ) : activeTab === 'Vaccination' ? (
          <VaccinationForm
            isVisible={showForm}
            onClose={() => setShowForm(false)}
          />
        ) : activeTab === 'Social' ? (
          <SocialForm
            isVisible={showForm}
            onClose={() => setShowForm(false)}
          />
        ) : activeTab === 'Family History' ? (
          <FamilyForm
            isVisible={showForm}
            onClose={() => setShowForm(false)}
          />
        ) : activeTab === 'Surgical' ? (
          <SurgicalForm
            isVisible={showForm}
            onClose={() => setShowForm(false)}
          />
        ) : activeTab === 'Allergy' ? (
          <AllergyForm
            isVisible={showForm}
            onClose={() => setShowForm(false)}
          />
        ) : activeTab === 'Vitals' ? (
          <VitalsForm
            isVisible={showForm}
            onClose={() => setShowForm(false)}
          />
        ) : null
      )}
       
       <StatusBar backgroundColor="#000000" style="dark" />

    </SafeAreaView>
    
  );
};

export default Records;
