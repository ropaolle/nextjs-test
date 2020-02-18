// import Link from 'next/link';
import Link from '../components/Link';
import { JsSquareIcon } from './FontAwsomeIcons';

const Logo = () => (
  <a className="logo" href="/">
    <JsSquareIcon size="36" color="deepskyblue" />
    <div>Licencia</div>
    <style jsx>{`
      .logo {
        display: flex;
        padding-left: 20px;
        margin-right: -10px;
        align-items: center;
        text-decoration: none;
        color: #ccc;
      }
      div {
        margin-left: 0.3em;
        font-weight: 600;
        font-size: 1.3rem;
      }
    `}</style>
  </a>
);

const StyledLink = ({ href, children }) => {
  console.log('href', href);
  return (
    <>
      <Link href={href} passHref>
        <a>{children}</a>
      </Link>
      <style jsx>{`
        a {
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
        }

        a.active {
          font-weight: 600;
          color: #fff;
        }
      `}</style>
    </>
  );
};

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <StyledLink href="/">Hem</StyledLink>
      </li>
      <li>
        <StyledLink href="/">Page</StyledLink>
      </li>
      <li>
        <StyledLink href="/">Logout</StyledLink>
      </li>
    </ul>
    <style jsx>{`
      nav {
        width: 100%;
        margin-top: 2px;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 0px 20px;
      }
      li {
        display: flex;
        align-items: center;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }
      ul li:last-child {
        margin-left: auto;
      }
    `}</style>
  </nav>
);

export default function Header() {
  return (
    <>
      <Logo />
      <Navigation />
    </>
  );
}
