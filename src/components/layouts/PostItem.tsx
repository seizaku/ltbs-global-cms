"use client";

import { urlFor } from "@/sanity/lib/image";
import { Post } from "@/types/post";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

export default function PostItem({ item }: { item: Post }) {
  return (
    <Link
      href={`/posts/${item.slug.current}`}
      className="text-muted-foreground flex items-center gap-4 overflow-hidden group"
    >
      <Image
        src={urlFor(item.mainImage.asset._ref).url()}
        height={240}
        width={240}
        alt={item.title}
        className="object-cover h-12 w-14 rounded-xl"
      />
      <div>
        <h6 className="text-xs font-medium text-muted-foreground group-hover:text-foreground">
          {item.title.slice(0, 30) + "..."}
        </h6>
        <span className="text-muted-foreground mt-2 text-xs">
          {moment(item._createdAt).format("LL")}
        </span>
      </div>
    </Link>
  );
}
