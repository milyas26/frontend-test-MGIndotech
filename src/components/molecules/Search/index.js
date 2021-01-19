import "./Search.css";
import { Heart } from "../../../assets";
import { useHistory } from "react-router-dom";

const Search = ({ onChange }) => {
  const history = useHistory();
  return (
    <div className="search">
      <div className="search-icon"></div>
      <input type="text" placeholder="Search..." onChange={onChange} />
      <div className="fav" onClick={() => history.push("/favourite")}>
        <img src={Heart} alt="" />
        <span>Favourites</span>
      </div>
    </div>
  );
};

export default Search;
