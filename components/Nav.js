import Link from 'next/link';

export default function Nav() {
  return (
    <nav id="nav">
      <ul>
        <li>
          <Link href="/">Root</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/home">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
