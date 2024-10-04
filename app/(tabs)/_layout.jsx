import { View, Text, Image} from 'react-native'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused}) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image 
            source={icon}
            resizeMode="contain"
            tintColor={color}
            className="w-5 h-5"
            />
        <Text className={`${focused ? 'font-psemibold' : 'font-sfbold'} text-xs`} style={{color: color}} >
            {name}
        </Text>

        </View>
    )
}
const TabsLayout = () => {
  return (
  <>
  <Tabs
    screenOptions={{

        tabBarShowLabel: false,
        tabBarActiveTintColor: '#1B77B6',
        tabBarInactiveColor: '#b9bcc2',
        tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopWitdh: 1,
            borderTopColor: '#232533',
            height: 100,
            
        }
    }}
    >
    <Tabs.Screen name="home" options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
            <TabIcon
            icon={icons.home}
            color={color}
            name="Home"
            focus={focused}
            />
        )

    }} 
    />
    <Tabs.Screen name="bookmark" options={{
        title: 'Bookmark',
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
            <TabIcon
            icon={icons.bookmark}
            color={color}
            name="Bookmark"
            focus={focused}
            />
        )

    }} 
    />
     <Tabs.Screen name="create" options={{
        title: 'Create',
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
            <TabIcon
            icon={icons.plus}
            color={color}
            name="Create"
            focus={focused}
            />
        )

    }} 
    />
     <Tabs.Screen name="profile" options={{
        title: 'Profile',
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
            <TabIcon
            icon={icons.profile}
            color={color}
            name="Profile"
            focus={focused}
            />
        )

    }} 
    />
  </Tabs>
  </>
  )
}

export default TabsLayout