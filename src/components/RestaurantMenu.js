import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constant";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchResMenu();
  }, []);

  const [resMenu, setResMenu] = useState(null);

  const {resId} = useParams();

  const fetchResMenu = async () => {
    const data = await fetch(
        MENU_API_URL + resId 
    );
    const json = await data.json();
    console.log(json.data);
    setResMenu(json.data);
  };

  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  return (
    <div className="restaurantMenu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h2></h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
