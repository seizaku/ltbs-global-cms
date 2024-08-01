import { Button, buttonVariants } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sanityFetch } from "@/sanity/lib/client";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import CollabsibleMenu from "../CollabsibleMenu";
import Link from "next/link";
import Image from "next/image";

export async function SideNavMenu({ links }: { links: Menu }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size={"icon"}>
          <HamburgerMenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"}>
        <Image
          src={"/logo.svg"}
          width={148}
          height={148}
          className="mx-auto my-4"
          alt="side-logo"
        />

        <ul className="space-y-2">
          {links.map((item) => (
            <li key={item.title}>
              {item.hasChildren ? (
                <CollabsibleMenu item={item} />
              ) : (
                <Link
                  className={buttonVariants({ variant: "ghost" })}
                  href={`/${item.custom_url ? item.url : item.linkToPage}`}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
