export default {
    name: 'featured',
    title: 'Featured Menu Category',
    type: 'document',
  
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Featured Category name',
  
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'short_discription',
        type: 'string',
        title: 'Short Discription',
  
        validation: (Rule) => Rule.max(200),
      },
      {
        name: 'restaurant',
        type: 'array',
        title: 'Restaurant',
        of: [{type: 'reference', to: [{type: 'restaurant'}]}],
      },
    ],
  }
  