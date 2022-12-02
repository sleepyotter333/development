import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import CurrentList from "./components/CurrentList"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
 
  return (
    <div className="App">
      <h1>Bakery</h1> {}

      
      <CurrentList></CurrentList>
      
    </div>
  );
}

export default App;
