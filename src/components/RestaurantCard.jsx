const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    areaName,
    locality,
  } = resData;

  const imageUrl = cloudinaryImageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`
    : "https://via.placeholder.com/660x370?text=No+Image";

  return (
    <div className="res-card">
      <img src={imageUrl} alt={name} className="res-logo" />
      <div>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{cuisines?.join(", ")}</p>
        <p className="text-sm mb-1">⭐ {avgRating}</p>
        <p className="text-sm mb-1">{costForTwo}</p>
        <p className="text-xs text-muted-foreground">{locality || areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
