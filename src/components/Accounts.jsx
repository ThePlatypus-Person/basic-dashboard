import { useState, useEffect } from "react";
import Table from "./Table.jsx";
import useFetch from "../hooks/useFetch.js";

const Accounts = () => {
  const { data, isPending, error } = useFetch("http://localhost:3001/accounts");
  const [head, setHead] = useState(["Username", "Role"]);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    setUserName(sessionStorage.getItem("userName"));
  }, [sessionStorage.getItem("userName")]);

  return (
    <div className="accounts">
      { isPending ? <div>Fetching data...</div>
        : error ? <div>{ error }</div>
        : (userName === "admin") && (
        <div className="table">
          <p>Account List</p>
          <div className="item head">
              <div className="id">{ head[0] }</div>
              <div className="name">{ head[1] }</div>
              <div className="desc"></div>
              <div className="creator"></div>
          </div>

          {data.map((item) => (
            <div className="item" key={item.id}>
              <div className="id">{ item.id }</div>
              <div className="name">{ item.role }</div>
              <div className="desc"></div>
              <div className="creator"></div>
            </div>
          ))}
        </div>
        )
      }
    </div>
  );
}

export default Accounts;
