import { useRouter } from 'next/router';
import Link from 'next/link';
import { ShieldAltIcon } from './FontAwsomeIcons';
import { Navbar, Nav, NavDropdown, Dropdown, Form, FormControl, Button } from 'react-bootstrap';

export default function Header({ isAuthenticated = true }) {
  let { pathname } = useRouter();

  const startsWith = subString => pathname.indexOf(subString) === 0;

  if (startsWith('/blog')) {
    pathname = '/blog';
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100">
      <Link href="/" passHref>
        <Navbar.Brand className="d-flex align-items-center text-success">
          <ShieldAltIcon size="36" />
          <span className="pl-2">3CX-proben</span>
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" activeKey={pathname}>
          {isAuthenticated ? (
            <>
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/blog" passHref>
                <Nav.Link>Blog</Nav.Link>
              </Link>
              <NavDropdown title="Test" id="collasible-nav-dropdown" active={startsWith('/test')}>
                <Link href="/test/test" passHref>
                  <NavDropdown.Item>Test</NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link href="/test/test2" passHref>
                  <NavDropdown.Item>Test 2</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </>
          ) : (
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
          )}
        </Nav>
        {isAuthenticated && (
          <Form inline>
            <Button variant="outline-info" className="mr-sm-2" size="sm">
              Search
            </Button>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" size="sm" />
          </Form>
        )}
        <Nav>
          {isAuthenticated ? (
            <Dropdown as={Nav.Item} alignRight>
              {/* NavDropdown can not be used if the dropdown is placed to the right. */}
              <Dropdown.Toggle id="user-dropdown" as={Nav.Link} active={startsWith('/user')}>
                John Doe
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Link href="/user/me" passHref>
                  <Dropdown.Item>Settings</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Link href="/user/logout" passHref>
                  <Dropdown.Item>Sign out</Dropdown.Item>
                </Link>
                <Link href="/user/login" passHref>
                  <Dropdown.Item>Sign in</Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Link href="/user/login" passHref>
              <Nav.Link>Sign in</Nav.Link>
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
