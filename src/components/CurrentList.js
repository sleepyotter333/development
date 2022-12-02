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
    // setCurrList(displayList)
  };
    return <div>
        {currList.map((item, index) => (
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
            <FormControlLabel control={<Checkbox />} label="Nut Free" />
            <FormControlLabel control={<Checkbox />} label="Vegan" />
    </FormGroup>
    <FormLabel id="other">Other:</FormLabel>
        <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Favorites" />
    </FormGroup>
    </FormControl>
      </div>
      
        </div>

}
