"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";

export default function CollabsibleMenu({ item }: { item: ParentMenuItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2"
    >
      <CollapsibleTrigger asChild>
        <Button variant="ghost" className="gap-2 justify-between w-full">
          {item.title}
          <ChevronDownIcon className={cn("h-5 w-5", isOpen && "rotate-180")} />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2 pl-8">
        <ul className="pl-4 border-l">
          {item.children.map((child) => (
            <li key={child.url}>
              <Link
                href={`${child.custom_url ? child.url : child.linkToPage}`}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full justify-start",
                )}
              >
                {child.title}
              </Link>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}
