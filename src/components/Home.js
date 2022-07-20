/*
 Importing name and city from the data.js file
2. Storing the variables returned from the data.js file with the React component
3. Rendering the returned variables to the screen.
*/ 
import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;