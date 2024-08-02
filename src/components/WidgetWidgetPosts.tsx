import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";
import PostItem from "./layouts/PostItem";

export async function WidgetPosts() {
  const POST_QUERY = `*[_type == "post"] [0...4] {
    _id,
    title,
    description,
    "excerpt": array::join(string::split((pt::text(body)), "")[0..100], "") + "...",
    slug,
    _createdAt,
    mainImage,
  }`;

  const post = await sanityFetch<Post[]>({ query: POST_QUERY });

  return (
    <div className="mt-4">
      <h5 className="font-semibold mb-4 text-sm leading-6 text-foreground">
        Recent Posts
      </h5>
      <ul className="flex flex-col gap-2">
        {post.map((item) => (
          <li key={item.title}>
            <PostItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
