import { useState, useEffect } from "react";
import { getRestaurant } from "./getRestaurants";

const useRestraunt = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await getRestaurant(id);
      console.log(data);
      setRestaurant(data);
    })();
  }, []);
  return restaurant;
};

export default useRestraunt;
