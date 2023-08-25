import './screen.css';
import Backgroundlist from './images/Backgroundlist';
function Screen(props){
    return (
        <div className="screen" ref={props.backgroundimagescreen} style={{ backgroundImage: `url(${Backgroundlist[props.backgroundindex]})` }}>
              <div id="screenmenu">
                    <div id="heading"><span>Mini Ipod App</span></div>
                    <div className="options" onClick={()=>props.Changecontent(1)}><span>Coverflow
                    </span></div>
                    <div className="options" onClick={()=>props.Changecontent(5)}><span>Music</span></div>
                    <div className="options" onClick={()=>props.Changecontent(3)}><span>Games</span></div>
                    <div className="options" onClick={()=>props.Changecontent(4)}><span>Settings</span></div>
              </div>
        </div>
    )
}
export default Screen;