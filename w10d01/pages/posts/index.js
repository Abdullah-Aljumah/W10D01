import { useRouter } from "next/router";
// This also gets called at build time
export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  return { props: { posts } };
}

const posts = ({ posts }) => {
  const router = useRouter();

  const postPage = (id) => {
    router.push(`/posts/${id}`);
  };

  return (
    <div>
      {posts.map((item) => {
        return (
          <div key={item.id} onClick={() => postPage(item.id)}>
            <h3 >{item.title}</h3>
            <p>{item.body}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default posts;
