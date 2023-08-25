import './Musicplayer.css';
import imagesList from './images/imagesList/imagesList';
function Musicplayer(props){
      console.log(imagesList);
      const {songList,index,updateprogressbar,changeinprogressbar,imagerotation}=props;
      songList[index].addEventListener("timeupdate", (event) => {
		updateprogressbar(event);
	});
   return (
         <div id="outerofmusic">
               <div>Playing Now</div>
               <div>
                <img  ref={imagerotation} src={imagesList[props.index]} alt="mymusic">
                    </img></div>
               <div id="songsprogress">
               <span>
                    <input onChange={()=>changeinprogressbar()} ref={props.progress} type="range" id="bar"  min="0" defaultValue={props.Barvalue} max="100"/>
                </span>
                </div>
         </div>
   );
}
export default Musicplayer;