import { InferGetStaticPropsType } from "next";
import { Footer } from "../components/footer";
import { Nav } from "../components/nav";
import { allBlogPosts } from "contentlayer/generated";
import { getPostFrontmatter } from "models/posts";
import { PostPreview } from "components/post-preview";

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

const Home = ({ renderedTime, posts }: HomeProps) => {
  return (
    <div className="">
      <Nav />
      <h1> Home </h1>
      <p>Renderizzato in data: {renderedTime}</p>

      <div className="max-w-2xl m-auto">
        <h2 className="text-center font-bold text-2xl mt-5">
          Tutti i miei post
        </h2>
        <div className="mt-4 grid gap-2 md:grid-cols-2 grid-cols-1">
          {posts.map((post) => (
            <PostPreview key={post._id} {...post} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const renderedTime = new Date();
  const posts = allBlogPosts.filter((p) => !p.isDraft).map(getPostFrontmatter);
  return {
    props: {
      renderedTime: renderedTime.toISOString(),
      posts,
    },
    revalidate: 10,
  };
};
