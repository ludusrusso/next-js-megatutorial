import type { BlogPostFrontMatter } from "models/posts";

export const PostPreview = (frontmatter: BlogPostFrontMatter) => {
  return (
    <div className="shadow-md p-2 hover:ring-2 rounded-md">
      <h2 className="text-lg font-semibold">{frontmatter.title}</h2>
      {frontmatter.date && (
        <time className="text-sm font-light" dateTime={frontmatter.date}>
          {formatDate(new Date(frontmatter.date))}
        </time>
      )}
      <p className="italic mt-2">{frontmatter.description}</p>
    </div>
  );
};

const formatDate = (date: Date) => {
  return date.toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
