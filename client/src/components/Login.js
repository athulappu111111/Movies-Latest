import React from "react";
import { Form, Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <Form
        className="loginpage"
        style={{ marginLeft: "48%", marginTop: "30%" }}
      >
        <Button
          variant="primary"
          size="lg"
          active
          onClick={() => loginWithRedirect()}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
