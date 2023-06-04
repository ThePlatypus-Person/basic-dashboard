import { Link } from "react-router-dom";
import "./itemTable.css";

const ItemTable = ({ list, head }) => {

  return (
    <div className="item-table">
      <div className="head">
          <div className="id">{ head[0] }</div>
          <div className="name">{ head[1] }</div>
          <div className="desc">{ head[2] }</div>
          <div className="creator">{ head[3] }</div>
      </div>

      {list.map((item) => (
        <Link to={`/items/${item.id}`}>
        <div className="item" key={item.id}>
          <div className="id">{ item.id }</div>
          <div className="name">{ item.name }</div>
          <div className="desc">{ item.description }</div>
          <div className="creator">{ item.creator }</div>
        </div>
        </Link>
      ))}

    </div>
  );
}

export default ItemTable;
