import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

interface CTASection {
  title: string;
  description: string;
  ctaText: string;
  href: string;
}

export default function CTASection({
  title,
  description,
  ctaText,
  href,
}: CTASection) {
  return (
    <section className="py-12 flex flex-col items-center gap-4 text-center bg-muted rounded-xl my-12">
      <h1 className="text-lg sm:text-3xl font-medium">{title}</h1>
      <p className="text-sm:text-lg max-w-sm sm:max-w-md">{description}</p>
      <Link href={href} className={buttonVariants()}>
        {ctaText}
      </Link>
    </section>
  );
}
