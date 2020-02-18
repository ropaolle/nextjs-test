import Link from 'next/link';

export default function Footer() {
  return (
    <div>
      Copyright &copy; {new Date().getFullYear()},{' '}
      <Link href="https://www.ropaolle.se">
        <a>RopaOlle.se</a>
      </Link>
    </div>
  );
}
