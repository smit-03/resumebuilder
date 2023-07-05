// import Navbar from "../../Components/Navbar/Navbar";
// import React from "react";
// const SignUp = () => {
//   return (
//     <>
//       <h1>SignUp Here</h1>;
//       <div className="App">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}

//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>

//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           <a
//             className="btn btn-primary"
//             data-bs-toggle="collapse"
//             href="#collapseExample"
//             role="button"
//             aria-expanded="false"
//             aria-controls="collapseExample"
//           >
//             Bootstrap button
//           </a>
//         </header>
//       </div>
//     </>
//   );
// };
// export default SignUp;

// import { graphql } from "gatsby";
// import Layout from "../components/layout";
// import Seo from "../components/seo";

// // All the gatsby-plugin-image goodness
// import { getImage } from "gatsby-plugin-image";

// The bridge for Gatsby Background Image in V3
// import { BgImage } from "gbimage-bridge";

// React Bootstrap
import "../../App.css";
import * as React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const navigate = useNavigate();
  // const SubmitForm = (event) => {
  //   event.preventDefault();
  //   navigate("/login");
  // };
  // const [data, setData] = React.useState({
  //   username: "",
  //   email: "",
  //   mobile: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  //   // console.log(data);
  // };

  // const submitForm = (e) => {
  //   e.preventDefault();
  //   const sendData = {
  //     username: data.username,
  //     email: data.email,
  //     mobile: data.mobile,
  //     password: data.password,
  //   };
  //   console.log(sendData);
  //   axios.post("http://localhost/reactphp/signup.php", sendData);
  // };

  const [uname, setUname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cpassword, setPasswordc] = React.useState("");
  const handleSubmit = (event) => {
    if (uname.length === 0) {
      alert("Name is required");
    } else if (email.length === 0) {
      alert("Email is required");
    } else if (mobile.length === 0) {
      alert("Mobile is required");
    } else if (password.length === 0) {
      alert("password is required");
    } else if (password != cpassword) {
      alert("password and confirm password not same");
    } else {
      // alert("all Set");\
      const url = "http://localhost/reactphp/signup.php";
      let fData = new FormData();
      fData.append("name", uname);
      fData.append("email", email);
      fData.append("mobile", mobile);
      fData.append("password", password);
      axios
        .post(url, fData)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));

      event.preventDefault();
      navigate("/login");
    }
  };
  // onSubmit={submitForm}
  return (
    <div className="color-overlay d-flex justify-content-center align-items-center">
      <Form className="border m-5 rounded p-4 p-sm-3">
        <Form.Group className="mb-3" controlId="formusername">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="Enter Your UserName"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
            // onChange={(e) => handleChange('forusername')}
          />
          <Form.Text className="text-muted">FirstName LastName</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formmobileno">
          <Form.Label>Mobile No</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Your Mobile Number"
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Confirm Password"
            name="cpassword"
            value={cpassword}
            onChange={(e) => setPasswordc(e.target.value)}
            // onChange={handleChange}
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
            onClick={handleSubmit}
          >
            SignUp
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
