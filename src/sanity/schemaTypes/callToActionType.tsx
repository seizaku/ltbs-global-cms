import { defineField, defineType } from "sanity";

export const callToActioType = defineType({
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
      name: "Call To Action URL",
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
