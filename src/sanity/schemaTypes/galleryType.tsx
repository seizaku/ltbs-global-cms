// imageGallery.js
import { LayoutGrid } from "@/components/ui/layout-grid";
import { defineField, defineType } from "sanity";

export const imageGalleryType = defineType({
  name: "gallery",
  type: "object",
  title: "Gallery",
  fields: [
    {
      name: "images",
      type: "array",
      of: [
        defineField({
          name: "image",
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "title",
              type: "string",
            },
            {
              name: "description",
              type: "text",
            },
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        }),
      ],
      options: {
        layout: "grid",
      },
    },
  ],
  preview: {
    select: {
      images: "images",
    },
    prepare(selection) {
      return {
        ...selection,
        title: "Gallery",
      };
    },
  },
});
