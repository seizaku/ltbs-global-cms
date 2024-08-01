interface Block {
  _type: string;
  style?: string;
  children?: Array<{ _type: string; text: string }>;
  _key?: string;
  markDefs?: any[];
}

interface TocItem {
  title: string;
  slug: string;
  children?: TocItem[];
}

export const getTableOfContents = (blocks: Block[]): TocItem[] => {
  const toc: TocItem[] = [];
  const stack: TocItem[] = [ { title: '', slug: '', children: toc } ]; // Root level with an empty title

  blocks.forEach(block => {
    if (block._type === 'block' && block.style && block.style.startsWith('h')) {
      const level = parseInt(block.style.slice(1) || '1');
      const text = block.children?.map(child => child.text).join('') || '';
      const slug = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

      const tocItem: TocItem = { title: text, slug, children: [] };

      // Pop elements from the stack until the current level
      while (stack.length >= level) {
        stack.pop();
      }

      // Add the new item to the children of the last item in the stack
      if (stack.length > 0) {
        stack[stack.length - 1].children!.push(tocItem);
      }

      // Push the new item to the stack
      stack.push(tocItem);
    }
  });

  return toc;
};
