import { Link } from "react-router-dom";
import "./accountTable.css";

const AccountTable = ({ list, head, handleDelete }) => {

  return (
    <div className="account-table">
      <div className="head">
          <div className="username">{ head[0] }</div>
          <div className="role">{ head[1] }</div>
      </div>

      {list.map(item => (
        <div className="account" key={item.id}>
          <div className="username">{ item.id }</div>
          <div className="role">{ item.role }</div>
          {
            (item.role !== "admin") ?
            <button className="delete-btn"
            onClick={() => handleDelete(item.id)}>Delete</button>
            : <div className="pad"></div>
          }
        </div>
      ))}

    </div>
  );
}

export default AccountTable;
