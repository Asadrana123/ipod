import React from "react";
import "./Settings.css"
import Backgroundlist from "./images/Backgroundlist";
function Settings(props){
    return(
        <div className="sscreen" ref={props.backgroundimagesettings} style={{ backgroundImage: `url(${Backgroundlist[props.backgroundindex]})` }}>
        <div id="sscreenmenu">
              <div id="sheading"><span>Mini Ipod App</span></div>
              <div className="soptions" onClick={()=>props.changebackground()}><span>Change Wallpaper
              </span></div>
              <div className="soptions" onClick={()=>props.changetheme()}><span>Change Theme</span></div>
              <div className="soptions" onClick={()=>{alert("will be add    in next version")}}><span>Change Orienatation</span></div>
        </div>
  </div>
    )
}
export default Settings;