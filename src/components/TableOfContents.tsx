import { getTableOfContents } from "@/lib/toc";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import React from "react";

interface TocItem {
  title: string;
  slug: string;
  children?: TocItem[]; // Optional nested items
}

interface TableOfContentsProps {
  article: any;
}

const scrollIntoView = (slug: string) => {
  const element = document.getElementById(slug);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};

const renderTocItems = (items: TocItem[], level = 0) => {
  console.log(level * 2);
  return (
    <ul className={cn("text-slate-700 text-sm leading-6", `pl-${level * 4}`)}>
      {items.map((item) => (
        <li key={item.slug}>
          <a
            onClick={() => scrollIntoView(item.slug)}
            className="py-1 cursor-pointer font-medium flex gap-2 items-center text-muted-foreground hover:text-foreground"
          >
            {level > 0 && <ChevronRightIcon />}
            {item.title}
          </a>
          {item.children &&
            item.children.length > 0 &&
            renderTocItems(item.children, level + 1)}
        </li>
      ))}
    </ul>
  );
};

const TableOfContents: React.FC<TableOfContentsProps> = ({ article }) => {
  const tocItems: TocItem[] = getTableOfContents(article);
  return (
    <div>
      {tocItems.length && (
        <>
          <h5 className="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">
            Table of Contents
          </h5>
          {renderTocItems(tocItems)}
        </>
      )}
    </div>
  );
};

export default TableOfContents;
