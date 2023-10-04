// import { useNavigation } from '@react-navigation/native'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './Header'
import Categories from "../components/Categories";
import Feature from '../components/Feature';
import { useEffect, useState } from 'react';
import SanityClient from "../sanity";

const HomeScreen = () => {
  // const navigation = useNavigation()

  const [featuredCategories, setFeaturedCategories] = useState([])

  useEffect(() => {
    SanityClient.fetch(
      `
  *[_type == "featured"]{
    ...,
    restaurants[]->{
      ...,
      dishes[]->,
    }
  },
  `
    ).then(data => setFeaturedCategories(data));
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">

      <Header />
      <ScrollView className="bg-gray-100" contentContainerStyle={{ paddingBottom: 100 }}>
        <Categories />


        {featuredCategories?.map(Category => (
          <Feature
            key={Category._d}
            id={Category._id}
            title={Category.name}
            discription={Category.short_description}
          />
        ))}

        <ScrollView
          className="bg-gray-100"
          contentContainerStyle={{ paddingBottom: 100 }}
        >

          <Feature
            id="1"
            title="Featured"
            discription="Paid Placements from our partners"
          />
          <Feature
            id="2"
            title="Tasty Discount"
            discription="Everyone's been enjoying these juicy discounts!"
          />
          <Feature
            id="3"
            title="Offers near you"
            discription="why not supprt local restaurant tonight"
          />
        </ScrollView>

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen