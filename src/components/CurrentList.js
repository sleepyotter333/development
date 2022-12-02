/* images used for this assignment are from the React Studio */
import "../App.css";
import { useState } from "react";
import bakeryData from "../assets/bakery-data.json";
import BakeryItem from "../components/BakeryItem"


export default function CurrentList(props) {
/* list of favorites */
  const [currList, setCurrList] = useState([]);
  /* list of favorites */
  const [favs, setFavs] = useState([]);
  /* total price of favorites */
  const [total, setTotal] = useState(0);

  
    return <div>
        {bakeryData.map((item, index) => (
          <BakeryItem{...item} favs={favs} setFavs={setFavs} total={total} setTotal={setTotal}/>
      ))}
      <div>
        <h2>Favorited Items</h2>
        <ul>
        {favs.map((item, index) => (
            <li>{item}</li>
        ))}
        </ul>
      <h3>Favorites Total: ${(total).toFixed(2)}</h3>
      </div>
        </div>

}
