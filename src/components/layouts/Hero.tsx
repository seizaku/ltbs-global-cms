import React from "react";
import { Badge } from "../ui/badge";
import { Image } from "./Image";
import moment from "moment";

interface Hero {
  title: string;
  date: string;
  src: string;
  alt: string;
  categories: {
    _id: string;
    title: string;
  }[];
}

export default function Hero({ title, date, src, alt, categories }: Hero) {
  return (
    <>
      <section className="mx-auto py-12 mb-8 text-center flex flex-col items-center justify-center gap-4">
        {categories.map((category) => (
          <Badge
            key={category._id}
            className="p-1 px-4 rounded-full text-sm text-muted-foreground"
            variant={"secondary"}
          >
            {category.title}
          </Badge>
        ))}
        <h1 className="text-xl sm:text-4xl max-w-4xl font-medium">{title}</h1>
        <p className="text-muted-foreground font-medium">
          {moment(date).format("LL - LT")}
        </p>
      </section>
      <Image ratio={16 / 8} src={src} alt={alt} />
    </>
  );
}
