import React, { useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import NasaPhoto from "./Components/NasaPhoto";

const dummyData = {
date: "2023-05-15",
explanation:"From afar, the whole thing looks like an eagle.  A closer look at the Eagle Nebula, however, shows the bright region is actually a window into the center of a larger dark shell of dust.  Through this window, a brightly-lit workshop appears where a whole open cluster of stars is being formed.  In this cavity, tall pillars and round globules of dark dust and cold molecular gas remain where stars are still forming.  Already visible are several young bright blue stars whose light and winds are burning away and pushing back the remaining filaments and walls of gas and dust.  The Eagle emission nebula, tagged M16, lies about 6500 light years away, spans about 20 light-years, and is visible with binoculars toward the constellation of the Serpent (Serpens).  This picture involved long and deep exposures and combined three specific emitted colors emitted by sulfur (colored as yellow), hydrogen (red), and oxygen (blue).",
hdurl: "https://apod.nasa.gov/apod/image/2305/EagleDeep_Lacroce_2047.jpg",
title: "M16: Eagle Nebula Deep Field",
}

function App() {
  const[data, setData] = useState();
  
  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
     .then(res => {
       console.log(res);
       setData(res.data);
       })
       .catch(err => console.error(err))

  }, [])
  return (
    <div className="App">
      { data && <NasaPhoto photo={data} /> }
    </div>
  );
}

export default App;
