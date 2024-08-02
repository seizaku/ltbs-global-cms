import { defineField, defineType } from "sanity";

export const archiveType = defineType({
  name: "archive",
  title: "Archive",
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
      name: "type",
      type: "string",
      options: {
        list: [
          {
            title: "News & Events",
            value: "post",
          },
          {
            title: "Study The Bible",
            value: "bibleStudy",
          },
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "columns",
      type: "number",
    }),
    defineField({
      name: "limit",
      type: "number",
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
