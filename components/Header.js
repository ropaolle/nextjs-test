import Link from 'next/link';
import styles from './Header.module.css';

const linkStyle = {
  marginRight: 15,
};

export default function Header() {
  return (
    <div className={styles.aa}>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </div>
  );
}
