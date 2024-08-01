interface ChildMenuItem {
  custom_url: boolean | null;
  description: string;
  linkToPage: string | null;
  url: string | null;
  title: string;
}

interface ParentMenuItem {
  title: string;
  custom_url: boolean | null;
  linkToPage: string | null;
  url: string | null;
  hasChildren: boolean;
  children: ChildMenuItem[];
}

type Menu = ParentMenuItem[];
