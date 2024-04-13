import { Route, Routes } from "react-router-dom";
import Red from "./Red";
import Blue from "./Blue";
import Home from "./Home";
import Navbar from "./Navbar";
export default function Main() {
  return (
    <>
      <div id="container">
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/Main/*" element={<Main />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
