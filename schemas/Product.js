export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },

    {
      name: 'description',
      type: 'string',
      title: 'description',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'cover',
      type: 'image',
      title: 'Cover',
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{type: 'image'}],
    },
  ],
}
