import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import Restaurantcard from './Restaurantcard'

const Feature = ({ discription, title, id }) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="fount-bold text-lg">{title}</Text>
                <ArrowRightIcon color='#00CCBB' />
            </View>
            <Text className="text-xs text-gray-500 px-4">   {discription} </Text>

            <ScrollView horizontal contentContainerStyle={{ paddingBottom: 15, }}
                showsHorizontalScrollIndicator={false} className="pt-4">
                <Restaurantcard id={id} imgUrl="https://links.papareact.com/gn7" title="Yo! Sushi" rating='4.5'
                    genre="japenese" address="123 Main St" short_description="This is a Test Description"
                    dishes={[]} long={20} lat={0} />
                    
                    <Restaurantcard id={id} imgUrl="https://links.papareact.com/gn7" title="Yo! Sushi" rating='4.5'
                    genre="japenese" address="123 Main St" short_description="This is a Test Description"
                    dishes={[]} long={20} lat={0} />

<Restaurantcard id={id} imgUrl="https://links.papareact.com/gn7" title="Yo! Sushi" rating='4.5'
                    genre="japenese" address="123 Main St" short_description="This is a Test Description"
                    dishes={[]} long={20} lat={0} />

            </ScrollView>
        </View>


    )
}

export default Feature