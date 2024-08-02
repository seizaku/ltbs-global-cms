import Link from "next/link";
import { Category } from "@/types/post";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

export function Card({
  href,
  src,
  title,
  description,
  categories,
  column,
}: {
  href: string;
  src: string;
  title: string;
  description: string;
  categories: Category[];
  column?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "hover:bg-primary/5 flex flex-col sm:flex-row w-full gap-8 items-center p-4 ease-in-out rounded-xl duration-200 transition-all prose-h4:m-0 prose-h4 prose-h4:font-medium prose-p:text-sm prose-p:text-muted-foreground prose-img:my-0",
        column && "flex-col",
      )}
    >
      <div
        className={cn(
          "relative w-full sm:w-96 h-44 rounded-xl overflow-hidden",
        )}
      >
        <Image
          src={urlFor(src).url()}
          layout="fill"
          objectFit="cover"
          alt={title}
          className="absolute inset-0"
        />
      </div>
      <div className="w-full">
        <h4>{title}</h4>
        <p className="text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {categories?.map((category: any) => (
            <Badge
              key={category._id}
              className="p-1 px-4 rounded-full text-sm text-muted-foreground"
              variant={"secondary"}
            >
              {category.title}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
