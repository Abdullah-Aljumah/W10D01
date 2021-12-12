import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <ul>
        <Link href="/home">
          <li>Home</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/posts">
          <li>Posts</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
