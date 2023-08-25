import { CDN_URL } from "../utils/constant";

export const RestaurantCard = (props) => {
    const { resData } = props;
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId}  = resData?.info;
    return (
      <div className="res-card">
        <div className="res-img">
          <img
            className="res-logo"
            src={
                CDN_URL + cloudinaryImageId
            }
          />
        </div>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} star</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };

  export default RestaurantCard;