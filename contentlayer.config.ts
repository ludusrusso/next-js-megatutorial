import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: `blog/**/*.(md|mdx)`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    date: {
      type: "date",
      description:
        "published date | if not set, the post is considered a draft",
      required: false,
    },
  },
  computedFields: {
    isDraft: {
      type: "boolean",
      resolve: (post) => {
        return !post.date;
      },
    },
    path: {
      type: "string",
      resolve: (post) => {
        if (!post.date) {
          return `draft-${post.title}`;
        }
        const date = computeDate(new Date(post.date));
        const slug = slugify(post.title);
        return `${date}-${slug}`;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [BlogPost],
});

function computeDate(date: Date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function slugify(title: string) {
  return title
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
