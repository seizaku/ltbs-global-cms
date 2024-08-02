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
  hideWidgets,
}: {
  article: (Block | Image)[];
  tableOfContents?: boolean;
  hideWidgets?: boolean;
}) {
  return (
    <section
      className={cn("grid grid-cols-1", !hideWidgets && "sm:grid-cols-6 gap-4")}
    >
      {!hideWidgets && (
        <aside className={cn("p-4", tableOfContents && "sm:col-span-2")}>
          <TableOfContents article={article} />
          <WidgetPosts />
        </aside>
      )}
      <article
        className={cn(
          "rounded-xl w-full mx-auto prose sm:prose-lg prose-p:text-[16px] text-foreground pt-4",
          tableOfContents && "sm:col-span-4 dark:prose-invert",
        )}
      >
        <PortableText value={article} components={RichTextComponents} />
      </article>
    </section>
  );
}
