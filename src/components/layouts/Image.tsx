"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import NextImage from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Hero {
  src?: string;
  alt: string;
  ratio?: number;
  className?: string;
  parseURL?: boolean;
}

export function Image({ src, alt, ratio, className, parseURL }: Hero) {
  return (
    <section
      className={cn(
        "mx-auto rounded-xl w-full overflow-hidden h-fit px-2 mb-4",
        className,
      )}
    >
      <AspectRatio ratio={ratio ?? 16 / 9} className="relative -z-10">
        <NextImage
          src={`${src ? (parseURL ? urlFor(src) : src) : "/hero-1.jpg"}`}
          alt={alt}
          fill
          className="rounded-xl object-cover"
        />
        <div className="absolute rounded-xl top-0 left-0 h-full w-full bg-black/20"></div>
      </AspectRatio>
    </section>
  );
}
