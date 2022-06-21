import type { BlogPost } from "contentlayer/generated";

export const getPostFrontmatter = ({
  _raw,
  body,
  ...frontMatter
}: BlogPost) => {
  return frontMatter;
};

export type BlogPostFrontMatter = ReturnType<typeof getPostFrontmatter>;
export type { BlogPost };
