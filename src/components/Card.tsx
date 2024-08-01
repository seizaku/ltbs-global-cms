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
        "hover:bg-gray-50 ease-in-out p-4 rounded-xl duration-200 transition-all"
      }
    >
      <div className="h-64 w-full overflow-hidden rounded-xl">
        <Image
          src={urlFor(src).url()}
          height={400}
          width={400}
          alt="12"
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
      <h2 className="mt-4 font-medium">{title}</h2>
      <p className="text-sm mt-2">{description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
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
