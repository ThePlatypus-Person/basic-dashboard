import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import Create from "./components/Create.jsx";
import EditItem from "./components/EditItem.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Accounts from "./components/Accounts.jsx";

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<Create />} />
            <Route path="/items/:id" element={<EditItem />} />
            <Route path="/accounts" element={<Accounts />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
