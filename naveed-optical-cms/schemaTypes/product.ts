import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Frames', value: 'Frames'},
          {title: 'Sunglasses', value: 'Sunglasses'},
          {title: 'Reading Glasses', value: 'Reading Glasses'},
          {title: 'Contact Lenses', value: 'Contact Lenses'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (PKR)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.warning('Products without a photo are harder for customers to trust — add one if you can.'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
      description: 'Shown in the "Featured Collection" section on the homepage.',
    }),
  ],
  orderings: [
    {
      title: 'Price, Low to High',
      name: 'priceAsc',
      by: [{field: 'price', direction: 'asc'}],
    },
    {
      title: 'Price, High to Low',
      name: 'priceDesc',
      by: [{field: 'price', direction: 'desc'}],
    },
    {
      title: 'Name, A-Z',
      name: 'nameAsc',
      by: [{field: 'name', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image',
      price: 'price',
      inStock: 'inStock',
    },
    prepare({title, subtitle, media, price, inStock}) {
      return {
        title,
        subtitle: `${subtitle} · PKR ${price ?? '—'}${inStock === false ? ' · Out of stock' : ''}`,
        media,
      }
    },
  },
})
