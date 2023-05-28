import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/accounts/${id}`)
      .then(res => {
        return res.json();
      }).then(data => {
        if (data.password === password) {
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

  return (
    <div className="login">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" required value={id}
        onChange={(e) => setId(e.target.value)} />

        <label>Password:</label>
        <input type="text" required value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <button>Login</button>
      </form>
    </div>
  );

}

export default Login;
