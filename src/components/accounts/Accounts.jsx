import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch.jsx";
import { useNavigate } from "react-router-dom";
import AccountTable from "../accountTable/AccountTable.jsx";
import "./accounts.css";

const Accounts = () => {
  const { data, isPending, error } = useFetch("http://localhost:3001/accounts");
  const [head, setHead] = useState(["Username", "Role"]);
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUserName(sessionStorage.getItem("role"))

    if (sessionStorage.getItem("role") !== "admin") {
      navigate("/");
    }

  }, [sessionStorage.getItem("role")]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/accounts/${id}`, {
      method: "DELETE"
    }).then(() => {
      navigate("/");
    });
  }

  return (
    <div className="accounts fade-in">
      {
        isPending ? <div>Fetching data...</div>
        : error ? <div>{ error }</div>
        : (userName === "admin") &&
          data && <AccountTable list={data} head={head} handleDelete={handleDelete} />
      }
    </div>
  );
}

export default Accounts;
