"use client";
import { Block, Image } from "@/types/post";
import { PortableText } from "next-sanity";
import { RichTextComponents } from "../RichTextComponents";
import { cn } from "@/lib/utils";
import TableOfContents from "../TableOfContents";
import { WidgetPosts } from "@/components/WidgetWidgetPosts";

export default function Article({
  article,
  tableOfContents,
}: {
  article: (Block | Image)[];
  tableOfContents?: boolean;
}) {
  return (
    <section
      className={cn("grid grid-cols-1", tableOfContents && "sm:grid-cols-6")}
    >
      <aside className={cn("p-4", tableOfContents && "sm:col-span-2")}>
        <TableOfContents article={article} />
        <WidgetPosts />
      </aside>
      <article
        className={cn(
          "rounded-xl w-full mx-auto prose sm:prose-lg prose-p:text-[16px] text-gray-700",
          tableOfContents && "sm:col-span-4",
        )}
      >
        <PortableText value={article} components={RichTextComponents} />
      </article>
    </section>
  );
}
