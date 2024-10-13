import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { images } from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView>
       <FlatList
          data={[ {id: 1}, {id: 2}, {id: 3} ]}
          keyExtractor={(item) => item.$id}
           renderItem={( {item }) => (
              <Text className="text-3xl">{item.id}</Text>
           )}
           ListHeaderComponent={() => (
            <View className="my-6 px-4 space-y-6">
              <View className="justify-between items-start flex-row mb-6">
                <View>
                  <Text className="font-pmedium text-sm text-black">Welcome back,

                  </Text>
                  <Text className="text-2xl font-psemibold">
                    KC
                  </Text>
                </View>
                <View className="mt-1.5">
                  <Image 
                    source={images.hblogosmall}
                    className="w-12 h-12"
                    resizeMode='contain'
                  />
                </View>
              </View>


            </View>
           )}
       />
    </SafeAreaView>
     
  )
}

export default Home