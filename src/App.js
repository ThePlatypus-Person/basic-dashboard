import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import Create from "./components/Create.jsx";

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
