import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./schemaTypes/blockContentType";
import { categoryType } from "./schemaTypes/categoryType";
import { postType } from "./schemaTypes/postType";
import { authorType } from "./schemaTypes/authorType";
import { pageType } from "./schemaTypes/pageType";
import { menuType, childMenuType } from "./schemaTypes/menuType";
import { bibleStudyType } from "./schemaTypes/bibleStudyType";
import { imageGalleryType } from "./schemaTypes/galleryType";
import { heroType } from "./schemaTypes/heroType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    pageType,
    postType,
    heroType,
    bibleStudyType,
    menuType,
    childMenuType,
    authorType,
  ],
};
