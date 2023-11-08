import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { NEW_API } from "./utils/constant";

/**const RestaurantMenu = () =>{

    const[resinfo, setresinfo]=useState(null); 
    
    const {resid}=useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu= async () =>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId=264693&catalog_qa=undefined&submitAction=ENTER");
        const json= await data.json();
        console.log(json);
        console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        //console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        //console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
        setresinfo(json?.data);
    }

    if(resinfo===null) 
        return <Shimmer/>

    const items=resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log(items); 
    
    return(
        <div>
            <ul>
                <li>restaurant</li>
                <li>Menu</li> 
                <li>{items[0]?.card?.info?.name}</li>
            </ul>
        </div>
    )
};*/



const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
  
    const { resId } = useParams();
    console.log(resId);
  
    useEffect(() => {
      fetchMenu();
    });
  
    const fetchMenu = async () => {
      const data = await fetch(NEW_API+resId);
      const json = await data.json();
      setResInfo(json.data);
    };
  
    if (resInfo === null) return <Shimmer />;
  
    //const { name, cuisines, costForTwoMessage } =
      //resInfo?.cards[0]?.card?.card?.info;
  
    const { itemCards } =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
      
     // resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  
    //console.log(itemCards);
  
    return (
      <div className="menu">
        <h2>Menu</h2>
        <ul>
          <li>whole menu</li>
          <li>{itemCards[0]?.card?.info?.name}</li>
          <li>{itemCards.map(items=><li key={items?.card?.info?.id}>{items?.card?.info?.name}</li>)}</li>
        </ul>
      </div>
    );
  };

export default RestaurantMenu;