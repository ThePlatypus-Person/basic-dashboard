import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.length == 0) {
      navigate("/login");
    } else {
      navigate("/main");
    }
  });

  return (
    <div className="home">
    </div>
  );
}

export default Home;
