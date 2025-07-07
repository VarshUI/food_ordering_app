import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

// Utility: Safe fetch helper
const safeFetch = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }
  return response.json();
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [originalList, setOriginalList] = useState([]);
  const [resList, setResList] = useState([]);
  const [showTopRated, setShowTopRated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().catch((error) => {
      console.error("Error fetching data:", error);
      setLoading(false);
    });
  }, []);

  const fetchData = async () => {
    setLoading(true);

    const apiData = await safeFetch(
      "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
    );

    const restaurants =
      apiData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    const processed = restaurants.map((restaurant) => ({
      id: restaurant.info.id,
      name: restaurant.info.name,
      cuisines: restaurant.info.cuisines || [],
      avgRating: restaurant.info.avgRating || 0,
      costForTwo: restaurant.info.costForTwo || "₹0 for two",
      cloudinaryImageId: restaurant.info.cloudinaryImageId || "",
      areaName: restaurant.info.areaName,
      locality: restaurant.info.locality,
    }));

    setOriginalList(processed);
    setResList(processed);
    setLoading(false);
  };

  const handleSearch = () => {
    const filtered = originalList.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setResList(filtered);
  };

  const handleToggle = () => {
    const filteredTopRated = originalList.filter((res) => res.avgRating >= 4.5);
    setResList(showTopRated ? originalList : filteredTopRated);
    setShowTopRated((prev) => !prev);
  };

  if (loading) {
    return (
      <div className="res-container">
        <div>Loading restaurants...</div>
      </div>
    );
  }

  return (
    <div>
      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search restaurants..."
          className="search"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {/* Filter Button */}
      <div className="filter">
        <button onClick={handleToggle} className="filter-btn">
          {showTopRated ? "Show All Restaurants" : "Top Rated Restaurants"}
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="res-container">
        {resList.length > 0 ? (
          resList.map((res) => (
            <RestaurantCard key={res.id} resData={res} />
          ))
        ) : (
          <div>No restaurants found.</div>
        )}
      </div>
    </div>
  );
};

export default Body;
