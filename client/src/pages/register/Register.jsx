import { useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">REGISTER</span>
      <form action="" className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your Username..."
          onChange={e => setUsername(e.target.value)} />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your Email..."
          onChange={e => setEmail(e.target.value)} />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Type your password..."
          onChange={e => setPassword(e.target.value)} />
        <label>Re-password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Re-type your password..." />
        <button className="registerButton" type="submit">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">Login</Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  )
}
