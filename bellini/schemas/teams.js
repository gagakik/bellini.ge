export default {
    name: 'teams',
    title: 'Teams',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Ferstname Lastname',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'string',
        options: {
            maxLength: 80,
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
            maxLength: 10,
          },
      },

    ],
  }