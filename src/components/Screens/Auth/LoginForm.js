import React from "react";
import "./LoginForm.css";
import AuthAPI from "../../../apis/AuthAPI"
export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="Username">Username</label>
        <input
          name="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={this.handleChange}
        />
        <label htmlFor="Password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={this.handleChange}
        />
        <button type="submit">Login</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };  

  handleSubmit = event => {
    console.log("Submitting");
    console.log(this.state);

    event.preventDefault();
    
    AuthAPI.authenticateUser(this.state, this.props.setJWT)
    // .then(() => {
      
    // })
    this.setState({
      username: "",
      password: ""
    })


  };
}
export default LoginForm;