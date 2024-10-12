import { View, Text, Image } from 'react-native'
import { Tabs } from 'expo-router'
import { icons } from '../../constants';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center">
            <MaterialIcons 
                name={icon}  // Use the icon name instead of the image source
                size={28}
                color={color} 
            />
           
            {focused && (  
                <Text className="font-semibold text-xs mt-1" style={{ color }}>
                    {name}
                </Text>
            )}
        </View>
    );
}


const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#46a9d3',  // White for active icons
                    tabBarInactiveTintColor: '#ffffff', // Gray for inactive icons
                    tabBarStyle: {
                       
                        backgroundColor: '#000000',  
                        borderRadius: 50,  
                        marginHorizontal: 20,  
                        height: 80,  
                        position: 'absolute', 
                        bottom: 25,  
                        paddingHorizontal: 20,  
                        justifyContent: 'space-between',  
                        alignItems: 'center',
                       paddingVertical: 20
                        
                    },
                }}
            >
                <Tabs.Screen 
                    name="home" 
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon="dashboard"  // Material icon name
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        )
                    }} 
                />
                <Tabs.Screen 
                    name="bookmark" 
                    options={{
                        title: 'Bookmark',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon="article"  // Material icon name
                                color={color}
                                name="Records"
                                focused={focused}
                            />
                        )
                    }} 
                />
                <Tabs.Screen 
                    name="create" 
                    options={{
                        title: 'Create',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon="add"  // Material icon name
                                color={color}
                                name="Create"
                                focused={focused}
                            />
                        )
                    }} 
                />
                <Tabs.Screen 
                    name="profile" 
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon="settings"  // Material icon name
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                        )
                    }} 
                />

            </Tabs>
        </>
    );
}

export default TabsLayout;
