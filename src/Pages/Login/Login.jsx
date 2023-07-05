import * as React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [uname, setUname] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [user, setUser] = React.useState([]);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost/reactphp/login.php");
    setUser(result.data.finaldata);
    console.log(result.data.finaldata);
  };
  const SubmitForm = (event) => {
    if (uname.length === 0) {
      alert("Name is required");
    } else if (password.length === 0) {
      alert("password is required");
    } else {
      const url = "http://localhost/reactphp/login.php";
      let fData = new FormData();
      fData.append("name", uname);
      fData.append("password", password);
      axios
        .post(url, fData)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));
      event.preventDefault();
      navigate("../home");
    }
  };
  return (
    <div className="color-overlay d-flex justify-content-center align-items-center">
      <Form className="border m-5 rounded p-4 p-sm-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your UserName"
            name="username"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group> */}
        <div className="d-grid gap-2">
          <Button
            size="md"
            variant="primary"
            type="submit"
            onClick={SubmitForm}
          >
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
