import { useState } from "react";

const search = (searchText, restaurants) => {
  return restaurants.filter(
    (restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText) ||
      restaurant.data.cuisines.some((cuisine) =>
        cuisine.toLowerCase().includes(searchText)
      )
  );
};

const Search = ({ setFilteredRestaurants, allRestaurants }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchText}
        onKeyDown={(e) => {
          if (e.key === "Enter") document.getElementById("search-btn").click();
        }}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="search-btn"
        type="submit"
        id="search-btn"
        onClick={() => {
          const searchData = search(searchText.toLowerCase(), allRestaurants);
          setFilteredRestaurants(searchData);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
