import Link from "next/link";
import { Category } from "@/types/post";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Badge } from "./ui/badge";

export function Card({
  href,
  src,
  title,
  description,
  categories,
}: {
  href: string;
  src: string;
  title: string;
  description: string;
  categories: Category[];
}) {
  return (
    <Link
      href={href}
      className={
        "hover:bg-primary/5 p-4 ease-in-out rounded-xl duration-200 transition-all prose-h3:m-0 prose-h3:my-2 prose-h3:font-medium prose-p:text-sm prose-p:text-muted-foreground prose-img:my-0"
      }
    >
      <div className="h-fit w-full overflow-hidden rounded-xl my-0">
        <Image
          src={urlFor(src).url()}
          height={400}
          width={400}
          alt="12"
          className="w-full object-cover rounded-xl my-0 py-0"
        />
      </div>
      <h3>{title}</h3>
      <p className="text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {categories?.map((category) => (
          <Badge
            key={category._id}
            className="p-1 px-4 rounded-full text-sm text-muted-foreground"
            variant={"secondary"}
          >
            {category.title}
          </Badge>
        ))}
      </div>
    </Link>
  );
}
