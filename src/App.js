import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Table from './components/Table.jsx';

function App() {
  const [list, setList] = useState([
    { id: 1, name: "Table", description: "Bob's table", creator: "Bob"},
    { id: 2, name: "Chair", description: "Bob's chair", creator: "Bob"},
    { id: 3, name: "Bob", description: "This is bob himself", creator: "Admin"},
    { id: 4, name: "Table", description: "Admin's table", creator: "Admin"},
    { id: 5, name: "Chair", description: "Admin's chair", creator: "Admin"},
  ]);

  const [tableTitle, setTableTitle] = useState(["Item Id", "Item Name", "Item Description", "Item Creator"]);

  return (
    <div className="App">
      <Navbar />
      <Table list={list} head={tableTitle} />

    </div>
  );
}

export default App;
