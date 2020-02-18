import LayoutLogin from '../../components/LayoutLogin.js';
import { Form, Button } from 'react-bootstrap';
import Link from 'next/link';
import { JsSquareIcon } from '../../components/FontAwsomeIcons';

const Login = () => {
  return (
    <LayoutLogin>
      <div>
        <h4 className="d-flex justify-content-center">
          <JsSquareIcon size="26" />
          <span className="pl-1">Navbar</span>
        </h4>
        <div className="form-wrapper">
          <h4>Login</h4>
          <Form>
            <Form.Group controlId="formEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-4">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control type="password" placeholder="Password" />
              {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
            </Form.Group>

            <div className="d-flex justify-content-between align-items-end">
              <Form.Group controlId="formCheckbox" className="mb-0">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
        <div className="footer-text">
          <small>
            Ta mig tillbaka till{' '}
            <Link href="/">
              <a>hem</a>
            </Link>
            .
          </small>
        </div>
      </div>
      <style jsx>{`
        .footer-text {
          text-align: center;
        }
        .form-wrapper {
          padding: 20px;
          background-color: #fff;
        }
        @media (min-width: 600px) {
          .form-wrapper {
            border: 1px solid #aaa;
            border-radius: 5px;
            min-width: 400px;
            margin: 0;
          }
        }
      `}</style>
    </LayoutLogin>
  );
};

export default Login;
