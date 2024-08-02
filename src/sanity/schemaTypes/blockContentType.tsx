import { defineType, defineArrayMember, defineField } from "sanity";
import { ImageIcon, StackIcon, PlayIcon } from "@sanity/icons";
import { YouTubeEmbed } from "@/components/layouts/YoutubeEmbed";
import { heroType } from "./heroType";
import { archiveType } from "./archiveType";

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    } as any),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: "image",
      icon: ImageIcon,
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    } as any),
    defineArrayMember({
      type: "object",
      name: "horizontal_rule",
      icon: StackIcon,
      title: "Horizontal Rule",
      fields: [
        {
          name: "dummy",
          type: "string",
          hidden: true,
        },
      ],
      preview: {
        prepare() {
          return {
            title: "Horizontal Rule",
            media: () => <hr />,
          };
        },
      },
    } as any),
    defineArrayMember({
      type: "object",
      name: "youtube_embed",
      icon: PlayIcon,
      title: "YouTube Embed",
      fields: [
        {
          name: "url",
          type: "url",
          title: "URL",
        },
      ],
      preview: {
        select: {
          url: "url",
        },
        prepare({ url }: any) {
          return {
            title: "Youtube Embed",
            media: <YouTubeEmbed value={url} />,
          };
        },
      },
    } as any),
    defineArrayMember({
      ...heroType,
    }),
    defineArrayMember({
      ...archiveType,
    }),
  ],
});
