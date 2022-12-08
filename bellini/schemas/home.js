export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
     
      {
        title: 'Description',
        name: 'description',
        type: 'text',
        options: {
            maxLength: 600,
          },
      }
    ],
  }