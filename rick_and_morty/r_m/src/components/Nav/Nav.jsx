import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
    </div>
  );
};
export default Nav;
