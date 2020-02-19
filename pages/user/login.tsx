import LayoutLogin from '../../components/LayoutLogin.js';
import { Form, Button } from 'react-bootstrap';
import Link from 'next/link';
import { JsSquareIcon } from '../../components/FontAwsomeIcons';

const Login = () => {
  return (
    <LayoutLogin>
      <div className="pt-3 pb-3">
        <h5 className="d-flex justify-content-center align-items-center">
          <JsSquareIcon className="text-dark mr-1" size="32" /> 3CX-proben
        </h5>
        <div className="form-wrapper bg-white p-4 shadow">
          <h4>Login</h4>
          <Form>
            <Form.Group controlId="formEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control type="email" placeholder="Enter email" />
              {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-4">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control type="password" placeholder="Password" />
              {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
            </Form.Group>

            <div className="d-flex justify-content-between align-items-end">
              <Form.Group controlId="formCheckbox" className="mb-0 mr-2">
                <Form.Check type="checkbox" label="Keep me logged in" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </div>
        <div className="text-center">
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
        @media (min-width: 600px) {
          .form-wrapper {
            min-width: 400px;
          }
        }
      `}</style>
    </LayoutLogin>
  );
};

export default Login;
