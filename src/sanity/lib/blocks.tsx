const toHTML = require("@sanity/block-content-to-html");
import { projectId, dataset } from "@/sanity/env";
import { Block, Image } from "@/types/post";
import { urlFor } from "./image";
import NextImage from "next/image";
import { Image as CustomImage } from "@/components/layouts/Image";
import { sluggify } from "./sluggify";
import moment from "moment";

const h = toHTML.h;

const serializers = {
  types: {
    youtube_embed: (props: any) =>
      h("iframe", {
        src: `${props.node.url.replace("watch?v=", "/embed/")}`,
        className: "w-full rounded-xl h-96",
      }),
    horizontal_rule: (props: any) => h("hr", { className: "my-2" }),
    hero: (props: any) =>
      h(
        "section",
        {
          className:
            "mx-auto py-12 mb-8 text-center flex flex-col items-center justify-center gap-4",
        },
        h(
          "h1",
          { className: "text-xl sm:text-4xl max-w-4xl font-medium" },
          props.node.title,
        ),
        h(
          "p",
          { className: "text-muted-foreground font-medium" },
          // moment(props.node.).format("LL - LT"),
        ),
      ),
  },
};

export const blocksToHTML = (blocks: (Block | Image)[]) =>
  toHTML({
    blocks: blocks,
    imageOptions: {
      max: "full",
    },
    projectId,
    serializers,
    dataset,
  });

// export const YouTubeEmbed = ({ url }: any) => (
//   <iframe
//     src={url.replace("watch?v=", "/embed/")}
//     className="w-full rounded-xl h-96"
//     frameBorder="0"
//     allowFullScreen
//   />
// );

// export const HorizontalRule = () => (
//   <hr className="my-2" />
// );
