import { Footer } from "components/footer";
import { Nav } from "components/nav";
import { allBlogPosts } from "contentlayer/generated";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

const BlogPostPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const Body = useMDXComponent(post.body.code);
  return (
    <div>
      <Nav />
      <article className="max-w-md m-auto">
        <h1 className="text-2xl text-center font-bold">{post.title}</h1>
        <div>
          <Body />
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPostPage;

export const getStaticPaths = async () => {
  const paths = allBlogPosts.map((post) => ({
    params: {
      path: post.path,
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ path: string }>) => {
  const path = params?.path!;
  const post = allBlogPosts.find((post) => post.path === path);
  return {
    props: {
      post: post!,
    },
  };
};
