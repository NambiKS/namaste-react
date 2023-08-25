import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            
            let filteredData = listOfRestaurants.filter((res) => res.info.avgRating > 4);
            setListOfRestaurants(filteredData);
            console.log(filteredData);
          }}
          
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res, i) => {
          return <RestaurantCard resData={res} key={res.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
