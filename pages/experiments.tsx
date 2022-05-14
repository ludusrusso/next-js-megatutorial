// pages/experiments.tsx
import { useEffect, useState } from "react";

const ExperimentsPage = () => {
  const posts: PostPreviewProps[] = [
    {
      title: "Primo post",
      timestamp: "un minuto fa",
      author: "Ludovico Russo",
      readTime: 10,
    },
    {
      title: "Un altro post",
      timestamp: "due giorni fa",
      author: "Ludovico Russo",
      readTime: 1,
    },
  ];

  const [value, setValue] = useState(10);

  useEffect(() => {
    console.log(`valore di value = ${value}`);
  }, [value]);

  return (
    <>
      <Nav />
      <div> Experiments Page </div>
      <div>
        <button onClick={() => setValue((s) => s + 1)}>Increment</button>
        <button onClick={() => setValue((s) => s - 1)}>Decremente</button>
        <button onClick={() => setValue(0)}>Reset</button>
      </div>
      <div>
        <Visualizer num={value} />
      </div>
      <div>
        <Visualizer num={value + 10} />
      </div>
      <div>
        <Timer />
      </div>
      <div>
        <h3>I miei post</h3>
        <ul>
          {posts.map((post, id) => (
            <li key={id}>
              <PostPreview
                title={post.title}
                timestamp={post.timestamp}
                author={post.author}
                readTime={post.readTime}
              />
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default ExperimentsPage;

const Nav = () => {
  return <nav>React Megaturial Navigation</nav>;
};

const Footer = () => {
  return <footer>React Megaturial; all right reserverd</footer>;
};

const Visualizer = ({ num }: { num: number }) => {
  return <span>Valore = {num}</span>;
};

const Timer = () => {
  const [cnt, setCnt] = useState(10);

  useEffect(() => {
    if (cnt > 0) {
      setTimeout(() => {
        setCnt((s) => s - 1);
      }, 1000);
    }
  }, [cnt]);

  if (cnt > 0) {
    return <p>Mancano {cnt} secondi!</p>;
  }
  return <p>Timer scaduto!</p>;
};

interface PostPreviewProps {
  title: string;
  timestamp: string;
  author: string;
  readTime: number;
}

const PostPreview = (post: PostPreviewProps) => {
  let timeMin = "minuti";
  if (post.readTime === 1) {
    timeMin = "minuto";
  }
  return (
    <span>
      {post.title} by {post.author} - <em>{post.timestamp}</em> - lettura in{" "}
      {post.readTime} {timeMin}
    </span>
  );
};
