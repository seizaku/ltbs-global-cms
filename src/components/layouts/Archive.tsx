import { sanityFetch } from "@/sanity/lib/client";
import React from "react";
import { Card } from "../Card";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ArchiveSection {
  type: string;
  title: string;
  description?: string;
  limit?: number;
  archiveURL: string;
  columns?: number;
}

export async function ArchiveSection({
  type,
  title,
  description,
  limit,
  archiveURL,
  columns,
}: ArchiveSection) {
  const ARCHIVE_QUERY = `*[_type == "${type}"] | order(_createdAt desc) [0...${limit ?? 4}] {
    _id,
    title,
    url,
    description,
    "excerpt": coalesce(
      array::join(string::split(description, "")[0..100], "") + "...",
      array::join(string::split((pt::text(body)), "")[0..100], "") + "..."
    ),
    slug,
    _createdAt,
    mainImage,
    body,
    categories[]-> {
      _id,
      title
    }
  }`;

  const archive = await sanityFetch<any[]>({ query: ARCHIVE_QUERY });
  console.log("Columns: ", columns);
  return (
    <section className="p-4 mt-4 prose-a:no-underline w-full">
      <Link href={archiveURL}>
        <h1 className="text-4xl font-medium">{title}</h1>
      </Link>
      <p className="max-w-xl mt-2">{description}</p>
      <div className={`grid mt-6 grid-cols-1 sm:grid-cols-${columns}`}>
        {archive?.map((item) => (
          <Card
            key={item._id}
            href={item.slug ? `/post/${item.slug.current}` : `${item.url}`}
            src={item.mainImage.asset._ref}
            title={item.title}
            description={item.excerpt}
            categories={"categories" in item ? item?.categories : []}
          />
        ))}
      </div>
    </section>
  );
}
