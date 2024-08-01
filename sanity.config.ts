"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { BookIcon,  FolderIcon, LinkIcon, MasterDetailIcon, DocumentTextIcon, ImagesIcon } from "@sanity/icons";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            // Minimum required configuration
            orderableDocumentListDeskItem({type: 'post', title: 'News & Events', icon: DocumentTextIcon, S, context}),
            orderableDocumentListDeskItem({type: 'category', title: 'Categories', icon: FolderIcon, S, context}),
            orderableDocumentListDeskItem({type: 'bibleStudy', title: 'Study The Bible', icon: BookIcon, S, context}),
            // orderableDocumentListDeskItem({type: 'gallery', title: 'Gallery', icon: ImagesIcon, S, context}),
            orderableDocumentListDeskItem({type: 'page', title: 'Pages', icon: MasterDetailIcon, S, context}),
            orderableDocumentListDeskItem({type: 'menu', title: 'Menu Links', icon: LinkIcon, S, context}),
            orderableDocumentListDeskItem({type: 'childMenu', title: 'Sub Menu Links', icon: LinkIcon, S, context}),

            // // Optional configuration
            // orderableDocumentListDeskItem({
            //   type: 'project',
            //   title: 'Projects',
            //   icon: Paint,
            //   // Required if using multiple lists of the same 'type'
            //   id: 'orderable-en-projects',
            //   // See notes on adding a `filter` below
            //   filter: `__i18n_lang == $lang`,
            //   params: {
            //     lang: 'en_US',
            //   },
            //   createIntent: false, // do not add an option for item creation
            //   menuItems: [], // allow an array of `S.menuItem()` to be injected to orderable document list menu
            //   // pass from the structure callback params above
            //   S,
            //   context,
            // }),

            // // ... all other desk items
          ])
      },
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
