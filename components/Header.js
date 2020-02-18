import Link from 'next/link';
import { JsSquareIcon } from './FontAwsomeIcons';

const Logo = () => (
  <a className="logo" href="/">
    <JsSquareIcon size="32" color="deepskyblue" />
    <div>Licencia</div>
    <style jsx>{`
      .logo {
        display: flex;
        padding-left: 20px;
        margin-right: -10px;
        align-items: center;
        text-decoration: none;
        color: #444;
      }
      div {
        margin-left: 0.3em;
        font-weight: 600;
        font-size: 1.3rem;
      }
    `}</style>
  </a>
);

const StyledLink = ({ href, children }) => (
  <>
    <Link href={href}>
      <a>{children}</a>
    </Link>
    <style jsx>{`
      a {
        color: #067df7;
        text-decoration: none;
      }
    `}</style>
  </>
);

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <StyledLink href="/">Hem</StyledLink>
      </li>
      <li>
        <StyledLink href="/page">Page</StyledLink>
      </li>
      <li>
        <StyledLink href="/logout">Logout</StyledLink>
      </li>
    </ul>
    <style jsx>{`
      nav {
        /* text-align: center; */
        width: 100%;
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
        justify-content: center;
        align-items: center;
        padding: 0px 8px;
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
