import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";

const EditItem = () => {
  const { id } = useParams();
  const { data, error, isPending } = useFetch(`http://localhost:3001/items/${id}`);
  const navigate = useNavigate();

  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    if (data != null) {
      setName(data.name);
      setDescription(data.description);
      setCreator(data.creator);
    }
  }, [data]);

  const handleDelete = () => {
    fetch(`http://localhost:3001/items/${id}`, {
      method: "DELETE"
    }).then(() => {
      navigate("/main");
    });
  }

  const handleSave = (e) => {
    e.preventDefault();
    const item = { name, description, creator };

    fetch(`http://localhost:3001/items/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item)
    }).then(() => {
      navigate("/main");
    });

  }

  return (
    <div className="edit-item">
      { isPending ? <div>Fetching data...</div>
      : error ? <div>{ error }</div>
      : data && (
        <div>
          <h2>Edit Item</h2>
          <form onSubmit={handleSave}>
            <label>Item Name:</label>
            <input type="text" required value={name}
              onChange={(e) => setName(e.target.value)} />

            <label>Item Description:</label>
            <input type="text" required value={description}
              onChange={(e) => setDescription(e.target.value)} />

            <label>Item Creator:</label>
            <div className="creator">{ creator }</div>

            <button>Save</button>
            <button onClick={handleDelete}>Delete Blog</button>
          </form>
        </div>
      ) }

    </div>
  );
}

export default EditItem;
