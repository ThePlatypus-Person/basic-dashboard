import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [hash, setHash] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.length != 0) {
      navigate("/main");
    }
  });


  const getHash = async (input) => {
    const textAsBuffer = new TextEncoder().encode(input);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hash = hashArray
      .map((item) => item.toString(16).padStart(2, "0"))
      .join("");

    console.log(hash);
    return hash;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getHash(password).then(hash => setHash(hash));

    if (hash !== null) {
      fetch(`http://localhost:3001/accounts/${id}`)
        .then(res => {
          return res.json();
        }).then(data => {
          if (data.hash === hash) {
            console.log("Pass equals hash");
            sessionStorage.setItem("userName", id);
            sessionStorage.setItem("role", data.role);
            navigate("/main");
          } else {
            alert("Login failed, try again.");
          }
        }).catch(err => {
          console.log("Error: " + err.message);
        });
    }
  }

  return (
    <div className="login">
      <div className="login-form rotate-in-2-cw">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input type="text" required value={id}
          onChange={(e) => setId(e.target.value)} />

          <label>Password:</label>
          <input type="password" required value={password}
            onChange={(e) => setPassword(e.target.value)} />

          <button className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );

}

export default Login;
