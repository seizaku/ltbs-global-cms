import { defineField, defineType } from "sanity";

export const callToActionType = defineType({
  name: "cta",
  title: "Call To Action",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "ctaText",
      title: "Call To Action Text",
      type: "string",
    }),
    defineField({
      name: "ctaURL",
      title: "Call To Action URL",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      description: "description",
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
