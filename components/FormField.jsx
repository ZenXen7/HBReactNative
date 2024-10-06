import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { useState } from "react";


import { icons } from "../constants";
const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    
    const [showPassword, setsetshowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-black font-psemibold">{title}</Text>
      
      <View className="w-full h-16 px-4 bg-slate-50 rounded-2xl border border-gray-200 focus:border-blue-600 items-center">
        <TextInput className="flex-1 text-black font-psemibold text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' && (<TouchableOpacity onPress={() => setsetshowPassword(!showPassword)}>
            <Image source={!showPassword ? icons.eye : icons.eyeHide} /></TouchableOpacity> ) }
      </View>
    </View>
  )
}

export default FormField