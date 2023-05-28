import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [checkPass, setCheckPass] = useState('');
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const verifyPassword = () => {
    if (password !== checkPass) {
      alert("Password does not match.");
      return false;
    }

    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (verifyPassword) {
      const account = { id, password, role };

      fetch("http://localhost:3001/accounts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(account)
      }).then(() => {
        alert("Account Registered Successfully.");
        navigate("/login");
      }).catch(err => {
        console.log("Error: " + err.message);
      });
    }
  }

  return (
    <div className="register">
      <h2>Register Account</h2>

      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" required value={id}
        onChange={(e) => setId(e.target.value)} />

        <label>Password:</label>
        <input type="text" required value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <label>Confirm Password:</label>
        <input type="text" required value={checkPass}
          onChange={(e) => setCheckPass(e.target.value)} />

        <button>Register</button>
      </form>
    </div>
  );

}

export default Register;
