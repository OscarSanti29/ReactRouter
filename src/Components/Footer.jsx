import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div id="container">
        <div id="navbar">
          <h2>Footer:</h2>
          <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/navbar">Navbar</Link>
          <Link to="/main">Main</Link>
        </div>
      </div>
    </>
  );
}
