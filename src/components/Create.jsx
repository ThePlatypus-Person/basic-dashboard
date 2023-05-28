import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [creator, setCreator] = useState(sessionStorage.getItem("userName"));
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, description, creator };

    fetch("http://localhost:3001/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item)
    }).then(() => {
      navigate("/main");
    });
  }

  return (
    <div className="create">
      <h2>Add new Item</h2>

      <form onSubmit={handleSubmit}>
        <label>Item Name:</label>
        <input type="text" required value={name}
          onChange={(e) => setName(e.target.value)} />

        <label>Item Description:</label>
        <input type="text" required value={description}
          onChange={(e) => setDescription(e.target.value)} />

        <label>Item Creator:</label>
        <div className="creator">{ creator }</div>

        <button>Add new item</button>
      </form>
    </div>
  );
}

export default Create;
