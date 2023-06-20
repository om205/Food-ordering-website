import { LOCATION_COORDINATES } from "../config";
const { lat, lng } = LOCATION_COORDINATES;

export const getRestaurants = async () => {
  const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`;
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data);
  return data?.data?.cards?.find(
    (card) => card?.cardType === "seeAllRestaurants"
  ).data.data.cards;
};

export const getRestaurant = async (id) => {
  const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${id}&submitAction=ENTER`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  const restaurant = data?.data?.cards[0]?.card?.card?.info;
  const itemCards = data?.data?.cards?.find((item) => item?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const items = itemCards
    .map((item) => {
      if (!item?.card?.card?.title) return null;
      return {
        category: item?.card?.card?.title,
        items: item?.card?.card?.itemCards?.map((item) => item?.card?.info),
      };
    })
    .filter((item) => item);
  return { ...restaurant, items };
};
