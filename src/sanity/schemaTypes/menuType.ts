import { orderRankField } from '@sanity/orderable-document-list';
import { defineField, defineType } from 'sanity';

export const menuType = defineType({
  name: 'menu',
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
      title: 'Custom URL',
      name: 'custom_url',
      type: 'boolean',
      hidden: ({ document }) => document?.hasChildren as any,
    }),
    defineField({
      title: 'Link to Page',
      name: 'page',
      type: 'reference',
      to: [{ type: 'page' }],
      hidden: ({ document }: any) => (document?.hasChildren || !!document?.custom_url as any),
    }  as any ),
    defineField({
      title: 'External URL',
      name: 'url',
      type: 'string',
      hidden: ({ document }) => (document?.hasChildren || !document?.custom_url as any),
    }),
    defineField({
      title: 'Has Children',
      name: 'hasChildren',
      type: 'boolean',
      description: 'Check this if the menu item has children',
    }),
    defineField({
      title: 'Children Links',
      name: 'children',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'childMenu' }] }],
      description: 'Nested links for child menus or submenus',
      hidden: ({ document }: any) => !document?.hasChildren,
    } as any),
  ],
});



export const childMenuType = defineType({
  name: 'childMenu',
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
      title: 'Custom URL',
      name: 'custom_url',
      type: 'boolean',
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      title: 'Link to Page',
      name: 'page',
      type: 'reference',
      to: [{ type: 'page' }],
      hidden: ({ document }: any) => !!document?.custom_url,
    }  as any ),
    defineField({
      title: 'External URL',
      name: 'url',
      type: 'string',
      hidden: ({ document }: any) => !document?.custom_url,
    }  as any ),
  ],
});
