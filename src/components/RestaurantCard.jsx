const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = ({ resData }) => {
  const { imageUrl, resName, cuisine, rating, deliveryTime } = resData;
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt="res-logo" src={imageUrl} />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
export default RestaurantCard;
