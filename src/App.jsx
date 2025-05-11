import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import MenuRoutes from "./components/MenuRoutes/Index.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/filmler/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.data ? data.data : []);
      })
      .catch((error) => {
        console.error("Hata:", error);
        setMovies([]);
      });
  }, []);

  return (
    <Router>
      <div className="flex justify-center items-center p-4 bg-gray-300 min-h-screen">
        <MenuRoutes movies={movies} />
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("burak"));
root.render(
  <App />
);

export default App;