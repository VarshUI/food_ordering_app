import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  useEffect(() => {});
  const [originalList, setOriginalList] = useState([
    {
      id: 0,
      resName: "Meghana Foods",
      cuisine: "Biryani, North Indian,",
      rating: 4.5,
      deliveryTime: "45 min",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf",
    },
    {
      id: 1,
      resName: "Taco Bell",
      cuisine: "Mexican, Fast Food,",
      rating: 4.0,
      deliveryTime: "35 min",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/7/08c2c720-6c94-49b5-b0a0-3d6cb4234e2c_80118.JPG",
    },
    {
      id: 2,
      resName: "Pizza Hut",
      cuisine: "Italian, Fast Food,",
      rating: 4.2,
      deliveryTime: "30 min",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/7a16c16a-e3dd-43c4-a094-5d41392de24d_10575.JPG",
    },
    {
      id: 3,
      resName: "Sushi World",
      cuisine: "Japanese, Sushi,",
      rating: 4.8,
      deliveryTime: "50 min",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bti87zuyybyskpzht5uo",
    },
    {
      id: 4,
      resName: "Curry House",
      cuisine: "Indian, Curry,",
      rating: 4.3,
      deliveryTime: "40 min",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/2/fb008b88-c4e4-4f64-9712-3282a54218e2_69354.jpg",
    },
    {
      id: 5,
      resName: "Burger King",
      cuisine: "Fast Food, Burgers,",
      rating: 4.1,
      deliveryTime: "25 min",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/aa2250f4-9b3d-4df1-a58d-276d36cc813e_5938.jpg",
    },
    {
      id: 6,
      resName: "Bheema's Kitchen",
      cuisine: "South Indian, Biryani,",
      rating: 4.4,
      deliveryTime: "60 min",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aff0be3ebc62e299701c087b8dcd1c0d",
    },
    {
      id: 7,
      resName: "Chalukya Samrat",
      cuisine: "Cafe, FastFood, Indian",
      rating: 4.4,
      deliveryTime: "30 min",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/7a5d73bfc2f0b293750e0497fddacc63",
    },
    {
      id: 8,
      resName: "Lakeview Milkbar",
      cuisine: "Desserts, Sweets,",
      rating: 4.7,
      deliveryTime: "20 min",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/juzrypje6zlbu2jgebwm",
    },
    {
      id: 9,
      resName: "Grill House",
      cuisine: "Barbecue, Grill,",
      rating: 4.9,
      deliveryTime: "45 min",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qltgnkyywuo5gmnpqzbm",
    },
    {
      id: 10,
      resName: "Beijing Bites",
      cuisine: "Chinese, Asian,",
      rating: 4.6,
      deliveryTime: "30 min",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/25/30fa9e0b-bfe8-439f-b648-78987ceade91_8766.jpg",
    },
    {
      id: 11,
      resName: "Glen's Bakehouse",
      cuisine: "Bakery, Desserts,",
      rating: 4.5,
      deliveryTime: "25 min",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/m6jahioyu7zrodei5pcq",
    },
    {
      id: 12,
      resName: "Mangnolia",
      cuisine: "Bakery, Desserts,",
      rating: 4.5,
      deliveryTime: "25 min",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/51195588-58c4-4018-8a65-1e0a654a5db9_1011691.jpg",
    },
    {
      id: 13,
      resName: "Cafe noir",
      cuisine: "Pasta, Pizza, Burgers",
      rating: 4.3,
      deliveryTime: "30 min",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b0a6a7d0f0fb89396e215fa4c2aaf213",
    },
    {
      id: 14,
      resName: "Swiss ice cream",
      cuisine: "Ice Cream, Desserts",
      rating: 4.8,
      deliveryTime: "20 min",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5db28ee7aed5c06a08111207a24c6a2c",
    },
  ]);
  const filterTopRated = originalList.filter((res) => res.rating >= 4.5);
  const [resList, setResList] = useState(originalList);
  const [showTopRated, setShowTopRated] = useState(false);
  const handleToggle = () => {
    showTopRated ? setResList(originalList) : setResList(filterTopRated);
    setShowTopRated(!showTopRated); // toggle state
  };
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleToggle}>
          {showTopRated ? "Show All Restaurants" : "Top Rated Restaurants"}
        </button>
      </div>
      <div className="res-container">
        {resList.map((res) => {
          return <RestaurantCard key={res.id} resData={res} />;
        })}
      </div>
    </div>
  );
};
export default Body;
