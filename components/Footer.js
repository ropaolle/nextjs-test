import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="box">
        My footer{' '}
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        hallå.
      </footer>
      <style jsx>{`
        footer {
          background-color2: brown;
        }
      `}</style>
    </>
  );
}
