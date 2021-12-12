// export async function getStaticPaths() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//   const posts = await res.json();

//   const paths = posts.map((post) => ({
//     params: { id: post.id },
//   }));
//   return { paths, fallback: false };
// }

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// }

// This also gets called at build time
export async function getStaticProps() {

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  return { props: { posts } };
}



const posts = ({ posts }) => {
  const postPage = () => {
  
  }
  return (
    <div>
      {posts.map((item) => {
        return (
          <div key={item.id}>
            <h3 onClick={postPage}>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default posts;
