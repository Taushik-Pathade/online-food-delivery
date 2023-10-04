export default{
name:'dish',
title: 'Dish',
type:'document',
fields:[
    {
        name: 'name',
        type: 'string',
        title: 'Name of Dishes',
  
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'short_discription',
        type: 'string',
        title: 'Short Discription',
  
        validation: (Rule) => Rule.required(200),
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price of the dishes in Rs',
  
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image of the Dishes',
  
      },

]

}