import { Text, ScrollView } from 'react-native'
import React from 'react'
import CategoriesCard from './CategoriesCard'
const Categories = () => {
  return (
<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 15, paddingTop:10 }}>
<CategoriesCard
imgUrl="https://links.papareact.com/gn7"
title={"Testing1"}/>
<CategoriesCard
imgUrl="https://links.papareact.com/gn7"
title={"testing2"}/>
<CategoriesCard
imgUrl="https://links.papareact.com/gn7"
title={"testing3"}/>
<CategoriesCard
imgUrl="https://links.papareact.com/gn7"
title={"testing4"}/>
<CategoriesCard
imgUrl="https://links.papareact.com/gn7"
title={"testing5"}/>

</ScrollView>
  )
}

export default Categories