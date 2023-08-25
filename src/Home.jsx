import React from "react";
import { FaHome } from "react-icons/fa";
import Backgroundlist from "./images/Backgroundlist";
import "./Home.css"
function Home(props){
    return(
        <div id="Home" ref={props.backgroundimagehome} style={{ backgroundImage: `url(${Backgroundlist[props.backgroundindex]})` }}>
         <span id="home"><FaHome/></span>
        </div>
    )
}
export default Home;