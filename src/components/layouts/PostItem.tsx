"use client";

import { urlFor } from "@/sanity/lib/image";
import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";

export default function PostItem({ item }: { item: Post }) {
  return (
    <Link
      href={`/posts/${item.slug.current}`}
      className="text-muted-foreground flex items-center gap-4"
    >
      <Image
        src={urlFor(item.mainImage.asset._ref).url()}
        height={64}
        width={86}
        alt={item.title}
        className="rounded-xl"
      />
      <div>
        <h6 className="text-xs font-medium">{item.title}</h6>
      </div>
    </Link>
  );
}
