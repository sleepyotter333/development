import React, {useState} from 'react';
import "../App.css";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';


export default function BakeryItem(props) {

    function removeItem(list, name){
        const index = list.indexOf(name);
            if (index > -1) {
            list.splice(index, 1);
            }
        return list
    }    

    function handleToggle() {
        props.setFavs(UpdateFavs(props.favs, props.name, props.total, props.price));
      };

    function addTotal(total, price){
        return total += price
    }
    function minusTotal(total, price){
        return total -= price
    }
    function UpdateFavs(favs, name, total, price){
        if(favs.includes(name)){
            favs = removeItem(favs, name)
            props.setTotal(minusTotal(total, price))
        }
        else {
            favs.push(name)
            props.setTotal(addTotal(total, price))
        }
        return favs
    }

    function checkNuts(nutty){
        if(nutty) {
            return "Nut Free"
        }
    }

    function checkVegan(vegan){
        if(vegan) {
            return "Vegan"
        }
    }
    return <div>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>{checkNuts(props.nutty)}</p>
        <p>{checkVegan(props.vegan)}</p>
        <h3>{props.price}</h3>
        <img src={props.image}/>
        <FormControlLabel control={<Switch onChange={handleToggle}/>} label="Add to Favorites" />
    
        </div>

}
