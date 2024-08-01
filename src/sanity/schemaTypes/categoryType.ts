import { orderRankField } from '@sanity/orderable-document-list'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  type: 'document',
  fields: [
    orderRankField({
      type: 'string'
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})
