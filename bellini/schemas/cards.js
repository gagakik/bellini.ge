export default {
    name: 'cards',
    title: 'cards',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'string',
        options: {
            maxLength: 10,
          },
      },
     
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
      },
      {
        title: 'Description',
        name: 'description',
        type: 'text',
        options: {
            maxLength: 200,
          },
      }
    ],
  }