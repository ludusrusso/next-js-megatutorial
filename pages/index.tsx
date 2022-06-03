import { InferGetStaticPropsType } from "next";
import { Footer } from "../components/footer";
import { Nav } from "../components/nav";

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

const Home = ({ renderedTime }: HomeProps) => {
  return (
    <div className="">
      <Nav />
      <h1> Home </h1>
      <p>Renderizzato in data: {renderedTime}</p>
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const renderedTime = new Date();
  return {
    props: {
      renderedTime: renderedTime.toISOString(),
    },
    revalidate: 10,
  };
};
