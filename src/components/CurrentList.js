/* images used for this assignment are from the React Studio */
import "../App.css";
import { useState } from "react";
import bakeryData from "../assets/bakery-data.json";
import BakeryItem from "../components/BakeryItem"
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import { display } from "@mui/system";


export default function CurrentList(props) {
/* list of current items displayed */
  const [currList, setCurrList] = useState(bakeryData.sort((a, b) => a.name.localeCompare(b.name)));
  /* list of types to filter by */
  const [filters, setFilters] = useState([]);
  /* list of favorites */
  const [favs, setFavs] = useState([]);
  /* total price of favorites */
  const [total, setTotal] = useState(0);

  function handleSortABC() {
     setCurrList([...currList].sort((a, b) => a.name.localeCompare(b.name)))
  };
  
  function handleSortPrice() {
     setCurrList([...currList].sort((a, b) =>
        parseFloat(a.price) - parseFloat(b.price))
     );
  };

  function removeItem(list, name){
    const index = list.indexOf(name);
        if (index > -1) {
        list.splice(index, 1);
        }
    return list
    } 

  function handleNutSelect() {
    if(filters.includes("Nut-Free")){
        setFilters(removeItem(filters, "Nut-Free"))
    }
    else {
        filters.push("Nut-Free")
        setFilters(filters)
    }
}

function handleVeganSelect() {
    if(filters.includes("Vegan")){
        setFilters(removeItem(filters, "Vegan"))
    }
    else {
        filters.push("Vegan")
        setFilters(filters)
    }
}

function handleFavsSelect() {
    if(filters.includes("Favs")){
        setFilters(removeItem(filters, "Favs"))
    }
    else {
        filters.push("Favs")
        setFilters(filters)
    }
}

function filterList(itemList, currFilters) {
    let tempList = itemList
    if (currFilters.length != 0) {
        for (let type in currFilters) {
            if(type == "Nut-Free") {
                tempList = tempList.filter(item => item.nutty)
            }
            else if(type == "Vegan") {
                tempList = tempList.filter(item => item.nutty)
            }
            else {
                tempList = tempList.filter(item => !currFilters.includes(item))
            }
        }
    }
    return tempList
};
    return <div>
        <main>
        {filterList(currList, filters).map((item, index) => (
          <BakeryItem{...item} favs={favs} setFavs={setFavs} total={total} setTotal={setTotal}/>
      ))}
      
      </main>
      <aside>
      <div>
      <FormControl>
        <FormLabel id="sortbylabel">Sort by:</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Alphabetical"
            name="radio-buttons-group"
        >
            <FormControlLabel value="Alphabetical" control={<Radio onChange={handleSortABC}/>} label="Alphabetical" />
            <FormControlLabel value="Price" control={<Radio onChange={handleSortPrice}/>} label="Price" />
            
        </RadioGroup>
        <FormControl>
    </FormControl>
    <FormLabel id="filterbylabel">Filter by:</FormLabel>
        <FormGroup>
            <FormControlLabel control={<Checkbox onChange={handleNutSelect}/>} label="Nut Free" />
            <FormControlLabel control={<Checkbox onChange={handleVeganSelect}/>} label="Vegan" />
    </FormGroup>
    <FormLabel id="other">Other:</FormLabel>
        <FormGroup>
            <FormControlLabel control={<Checkbox onChange={handleFavsSelect}/>} label="Favorites" />
    </FormGroup>
    </FormControl>
    <div>
        <h2>Favorited Items</h2>
        <ul>
        {favs.map((item, index) => (
            <li>{item}</li>
        ))}
        </ul>

      </div>
    <h3>Favorites Total: ${(total).toFixed(2)}</h3>
      </div>
      </aside>
        </div>

}
