import "./App.css";
import { Routes } from "react-router-dom";
import route from "./Router/router";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>{route.map((value) => value)}</Routes>
    </div>
  );
}

export default App;
