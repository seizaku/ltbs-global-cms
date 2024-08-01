export interface Slug {
  _type: 'slug';
  current: string;
}

export interface ImageAsset {
  _type: 'reference';
  _ref: string;
}

export interface Image {
  _type: 'image';
  alt: string;
  asset: ImageAsset;
}

export interface Span {
  _type: 'span';
  marks: any[];
  text: string;
  _key: string;
}

export interface Block {
  _type: 'block';
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote' | 'code'; // Expanded block styles
  markDefs: any[];
  children: Span[];
  _key: string;
}

export interface Category {
  _id: string;
  title: string;
}

export type Post = {
  _id: string;
  title: string;
  slug: Slug;
  _createdAt: string;
  mainImage: Image;
  body: (Block | Image)[];
  categories: Category[];
}
