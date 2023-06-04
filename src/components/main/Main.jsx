import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch.jsx";
import ItemTable from "../itemTable/ItemTable.jsx";
import loading from "../../assets/loading.svg";
import "./main.css";

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
        isPending ? <div className="loading">Fetching data...</div>
        : error ? <div className="error">{ error }</div>
        : (userName === "admin") ?
          data && <ItemTable list={data} head={tableTitle} />
        : data && <ItemTable list={data.filter(item => item.creator == userName)}  head={tableTitle} />
      }
    </div>
  );
}

export default Main;
