import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [id, setId] = useState('');
  const [idTaken, setIdTaken] = useState(false);
  const [password, setPassword] = useState('');
  const [hash, setHash] = useState(null);
  const [checkPass, setCheckPass] = useState('');
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3001/accounts/${id}`)
      .then(res => {
        if (res.ok) {
          setIdTaken(true);
        } else {
          setIdTaken(false);
        }
      });
  }, [id]);

  const getHash = async (input) => {
    const textAsBuffer = new TextEncoder().encode(input);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hash = hashArray
      .map((item) => item.toString(16).padStart(2, "0"))
      .join("");

    return hash;
  }

  const verify = () => {
    if (idTaken) {
      alert("Username taken.");
      return false;
    }

    if (password === checkPass) {
      return true;
    }

    alert("Password does not match.");
    return false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (verify()) {
      getHash(password).then(hash => setHash(hash));

      if (hash !== null) {
        const account = { id, hash, role };

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
