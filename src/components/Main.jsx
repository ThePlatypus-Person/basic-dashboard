import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch.js";
import Table from "./Table.jsx";

const Main = () => {
  const { data, isPending, error } = useFetch("http://localhost:3001/items");
  const [tableTitle, setTableTitle] = useState(["Item Id", "Item Name", "Item Description", "Item Creator"]);

  return (
    <div className="main">
      {
        isPending ? <div>Fetching data...</div>
        : error ? <div>{ error }</div>
        : data && <Table list={data} head={tableTitle} />
      }
    </div>
  );
}

export default Main;
