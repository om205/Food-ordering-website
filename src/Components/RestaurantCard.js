import { IMG_CDN_URL } from "../config";
import { Link } from "react-router-dom";

const RestaurantCard = ({
  id,
  name,
  area,
  cloudinaryImageId,
  cuisines,
  avgRating,
}) => {
  return (
    <div className="card">
      <Link to={`/restaurant/${id}`}>
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="restaurant image"
          className="restaurant-image"
        />
        <div className="card-content">
          <h3>{name}</h3>
          <h5>{cuisines?.join(", ")}</h5>
          <h4>{avgRating} ⭐</h4>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
