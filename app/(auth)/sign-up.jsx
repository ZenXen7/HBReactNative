import { View, Text, ScrollView, Image, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';

import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton'

import { createUser } from '../../lib/appwrite'

const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if(!form.username || !form.email || !form.password){
      Alert.alert('Error', 'Please fill in all the fields')
    }

    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.username)

      router.replace('/home')
    } catch (error) {
      Alert.alert('Error', error.message)
    }finally{
      setIsSubmitting(false)
    }
    
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
        keyboardVerticalOffset={0} 
      >
        <ScrollView>
          <View className="w-full justify-center h-[70vh] px-4 my-8 pt-20">
         
            <Image source={images.hblogo2}
              resizeMode='contain' className="ml-[70px] w-[190px] h-[90px]"
            />
            <Text className="text-3xl text-black text-semibold mt-2 font-sfbold">Sign Up</Text>

            <FormField
              title="Username"
              value={form.username}
              handleChangeText={(e) => setForm({ ...form, username: e })}
              otherStyles="mt-10"
            />

            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-7"
              keyboardType="email-address"
            />

            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-7"
              secureTextEntry={true} 
            />

            <CustomButton
              title="Sign Up"
              handlePress={submit}
              containerStyles="mt-7"
              isLoading={isSubmitting}
            />

            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-black font-pregular">Already have an account?</Text>
              <Link href="/sign-in" className="text-lg font-psemibold text-blue-600">Sign In</Link>

            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
