import { sanityFetch } from "@/sanity/lib/client";
import { Menu as NavigationMenu } from "../Menu";
import Link from "next/link";
import Image from "next/image";

const MENU_QUERY = `*[_type == "menu"] | order(orderRank) [0...6] {
  title,
  custom_url,
  "linkToPage": page->slug.current,
  url,
  hasChildren,
  children[]->{
    title,
    custom_url,
    description,
    "linkToPage": page->slug.current,
    url
  }
}`;

export async function Navbar() {
  const links = await sanityFetch<Menu>({ query: MENU_QUERY });

  return (
    <header className="fixed z-50 top-0 h-16 sm:h-28 flex items-center left-0 border-b sm:border-0 w-full bg-background">
      <nav className="container flex items-center justify-between gap-4">
        <div className="gap-4 items-center">
          <Link href={"/"} className="font-medium block">
            <Image
              src={"/logo.svg"}
              width={64}
              height={64}
              className="h-14 sm:h-20 w-14 sm:w-20"
              alt="footer-logo"
            />
          </Link>
        </div>
        <NavigationMenu menu={links} />
      </nav>
    </header>
  );
}
