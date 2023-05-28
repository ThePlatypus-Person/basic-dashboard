import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch.js";
import Table from "./Table.jsx";

const Main = () => {
  const [userName, setUserName] = useState(null);
  const { data, isPending, error } = useFetch("http://localhost:3001/items");
  const [tableTitle, setTableTitle] = useState(["Item Id", "Item Name", "Item Description", "Item Creator"]);

  useEffect(() => {
    setUserName(sessionStorage.getItem("userName"));
  }, [sessionStorage.getItem("userName")]);

  return (
    <div className="main">
      {
        isPending ? <div>Fetching data...</div>
        : error ? <div>{ error }</div>
        : (userName === "admin") ?
          data && <Table list={data} head={tableTitle} />
        : data && <Table list={data.filter(item => item.creator == userName)}  head={tableTitle} />
      }
    </div>
  );
}

export default Main;
