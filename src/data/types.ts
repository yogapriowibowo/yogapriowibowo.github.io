/** `file` is the filename WITHOUT extension. Drop the real image into public/images/ as .webp, .jpg or .png. */
export interface Img { file: string; guide: string }
export interface Block {
  heading: string;
  images?: Img[];
  body?: string[];
  tech?: string[];
  lists?: { title?: string; items: string[] }[];
}
export interface Project {
  slug: string; title: string; subtitle: string; cover: Img;
  meta: { label: string; value: string }[];
  link?: { label: string; url: string };
  overview: string[]; responsibilities: string[];
  blocks: Block[];
  review?: { heading: string; image: Img };
}
