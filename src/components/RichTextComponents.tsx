"use client";
import { urlFor } from "@/sanity/lib/image";
import { YouTubeEmbed } from "./layouts/YoutubeEmbed";
import { sluggify } from "@/sanity/lib/sluggify";
import { ArchiveSection } from "./layouts/Archive";
import { callToActionType } from "@/sanity/schemaTypes/callToActionType";
import CTASection from "./layouts/CTA";

export const RichTextComponents: any = {
  types: {
    youtube_embed: ({ value }: any) => {
      return <YouTubeEmbed value={value.url} />;
    },
    horizontal_rule: () => <hr className="my-2" />,
    image: ({ value }: any) => {
      return <img src={urlFor(value.asset._ref).url()} />;
    },
    callToActioType: ({ value }: any) => {
      return (
        <CTASection
          title={value.title}
          description={value.description}
          ctaText={value.ctaText}
          href={value.ctaURL}
        />
      );
    },
    archive: ({ value }: any) => {
      return (
        <ArchiveSection
          title={value.title}
          description={value.description}
          type={value.type}
          limit={value.limit}
          archiveURL={value.type == "post" ? "/news-and-events" : ""}
          columns={value.columns}
        />
      );
    },
  },
  block: {
    h1: ({ children, value }: any) => (
      <h1 id={sluggify(children?.toString())}>{children}</h1>
    ),
    h2: ({ children, value }: any) => (
      <h2 id={sluggify(children?.toString())}>{children}</h2>
    ),
    h3: ({ children, value }: any) => (
      <h3 id={sluggify(children?.toString())}>{children}</h3>
    ),
    h4: ({ children, value }: any) => (
      <h4 id={sluggify(children?.toString())}>{children}</h4>
    ),
    h5: ({ children, value }: any) => (
      <h5 id={sluggify(children?.toString())}>{children}</h5>
    ),
    h6: ({ children, value }: any) => (
      <h6 id={sluggify(children?.toString())}>{children}</h6>
    ),
  },

  // marks: {
  //   link: ({ children, value }) => {
  //     const rel = !value.href.startsWith("/")
  //       ? "noreferrer noopener"
  //       : undefined;
  //     return (
  //       <a href={value.href} rel={rel}>
  //         {children}
  //       </a>
  //     );
  //   },
  // },
};
