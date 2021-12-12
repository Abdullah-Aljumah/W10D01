import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <ul>
        <Link href="/home" passHref>
          <li>Home</li>
        </Link>
        <Link href="/contact" passHref>
          <li>Contact</li>
        </Link>
        <Link href="/about" passHref>
          <li>About</li>
        </Link>
        <Link href="/posts" passHref>
          <li>Posts</li>
        </Link>
      </ul>
      <hr />
    </div>
  );
};

export default Navbar;
