import { useParams } from "react-router-dom";
import { getRestaurant } from "../helper/getRestaurants";
import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../config";
import ItemMenu from "./ItemMenu";
import useRestaurant from "../helper/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  const { name, areaName, city, avgRating, cloudinaryImageId, items } =
    restaurant || {};
  return (
    restaurant && (
      <div className="container-flex">
        <div className="card">
          <img
            src={IMG_CDN_URL + cloudinaryImageId}
            alt="Restaurant Image"
            className="restaurant-image"
          />
          <div className="card-content">
            <h4>{name}</h4>
            <h5>{areaName}</h5>
            <h5>{city}</h5>
            <h3>{avgRating + "⭐"}</h3>
          </div>
        </div>
        <div className="item-menu">
          <ItemMenu data={items} />
        </div>
      </div>
    )
  );
};

export default RestaurantMenu;
