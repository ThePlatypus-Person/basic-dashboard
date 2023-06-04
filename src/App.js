import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Accounts, Create, EditItem, Home, Login, Main, Navbar, Register } from "./components";

function App() {
  return (
      <Router>
        <div className="app">
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<Create />} />
            <Route path="/items/:id" element={<EditItem />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
