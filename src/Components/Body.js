import { useEffect, useState } from "react";
import restaurantList from "../../public/data/Swiggy_Api_data_Dhanbad";
import RestaurantCard from "./RestaurantCard";
import { getRestaurants } from "../helper/getRestaurants";
import Search from "./SearchRestaurant";
import Shimmer from "./ShimmerUI";

const NotFound = (
  <>
    <h2 style={{ margin: "20px auto", maxWidth: "90vw" }}>
      NO RESTAURANT FOUND: Sorry, we could not find any items matching your
      search result.
    </h2>
  </>
);

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants().then((data) => {
      setAllRestaurants(data);
      setFilteredRestaurants(data);
    });
  }, []);

  const searchProps = { allRestaurants, setFilteredRestaurants };

  return (
    <>
      <Search {...searchProps} />
      <div className="restaurant-list">
        {allRestaurants.length === 0 ? (
          <Shimmer />
        ) : filteredRestaurants.length === 0 ? (
          NotFound
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
