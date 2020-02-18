import { useRouter } from 'next/router';
import Link from 'next/link';
import { JsSquareIcon } from './FontAwsomeIcons';
import { Navbar, Nav, NavDropdown, Dropdown, Form, FormControl, Button } from 'react-bootstrap';

export default function Header() {
  const { pathname } = useRouter();

  console.log();

  return (
    <Navbar bg="dark" variant="dark">
      <Link href="/" passHref>
        <Navbar.Brand className="d-flex align-items-center">
          <JsSquareIcon size="36" />
          <span className="pl-2">Navbar</span>
        </Navbar.Brand>
      </Link>
      <Nav className="mr-auto" activeKey={pathname}>
        <Link href="/" passHref>
          <Nav.Link>Home</Nav.Link>
        </Link>
        <Link href="/blog" passHref>
          <Nav.Link>Blog</Nav.Link>
        </Link>
        <NavDropdown title="Test" id="collasible-nav-dropdown" active={pathname.indexOf('/test') === 0}>
          <Link href="/test" passHref>
            <NavDropdown.Item>Test</NavDropdown.Item>
          </Link>
          <NavDropdown.Divider />
          <Link href="/test/test2" passHref>
            <NavDropdown.Item>Test 2</NavDropdown.Item>
          </Link>
        </NavDropdown>
      </Nav>
      <Form inline>
        <Button variant="outline-info" className="mr-sm-2">
          Search
        </Button>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      </Form>
      {/* NavDropdown can not be used if the dropdown is placed to the right. */}
      <Nav>
        <Dropdown as={Nav.Item} alignRight>
          <Dropdown.Toggle id="user-dropdown" as={Nav.Link} active>
            John Doe
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Link href="/blog" passHref>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Link href="/blog" passHref>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
}
