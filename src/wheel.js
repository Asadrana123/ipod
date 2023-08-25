import './wheel.css';
import { FaForward, FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
function Wheel(props){
  const {isPlaying}=props;
   return (
     <div className="square" ref={props.bg}>
      <div id="wheel">
             <p id="menu" onClick={()=>props.Changecontent(0)}><button><AiOutlineMenu/></button></p>
             <div id="middle">
              <p id="forward"><button onClick={()=>props.prev()}><FaBackward/></button></p>
            <div id="inner-wheel" onClick={()=>props.Changecontent(2)}>

            </div>
            <p id="backward"><button onClick={()=>props.next()}><FaForward/></button></p>
            </div>
            <p id="play"><button onClick={()=>props.Play()} ref={props.PlayButton}>{isPlaying?<FaPause/>:<FaPlay/>}</button></p>
      </div>
     </div>
   );
}
export default Wheel;