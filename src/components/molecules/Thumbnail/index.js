import { Heart, HeartInactive } from "../../../assets";
import "./Thumbnail.css";
const Thumbnail = ({ img, title, addToFav }) => {
  return (
    <div className="thumbnail">
      <img src={img} alt="" />
      <div className="title">
        <span>{title}</span>
        <img src={HeartInactive} alt="" onClick={addToFav} />
      </div>
    </div>
  );
};

export default Thumbnail;
