import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

export default function Header() {
  return (
    <>
      {/* <header className="box"> */}
      <nav>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
      </nav>
      {/* </header> */}
      {/* <style jsx>{`
        header {
          background-color: lightblue;
        }

        nav {
          color: red;
        }
      `}</style> */}
    </>
  );
}
