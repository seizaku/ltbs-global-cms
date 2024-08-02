import { orderRankField } from '@sanity/orderable-document-list'
import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Pages',
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
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      title: 'Image Only',
      name: 'imageOnly',
      type: 'boolean',
      description: 'Check this you want to hide page title',
    }),
    defineField({
      title: 'Hide Side Widget',
      name: 'hideWidgets',
      type: 'boolean',
      description: 'Check this you want to side widgets',
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
