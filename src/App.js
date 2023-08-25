import React from 'react';
import './App.css'
import Wheel from './wheel'
import Screen from './screen'
import Home from "./Home"
import Games from './Games';
import Coverflow from './Coverflow';
import Settings from './Settings';
import Musicplayer from './Musicplayer';
import Songs   from './Songs/Listsong';
import Backgroundlist from './images/Backgroundlist';
class App extends  React.Component {
  constructor(){
    super();
    this.progressRef = React.createRef();
    this.imagerotation=React.createRef();
    this.backgroundimagehome=React.createRef();
    this.backgroundimagescreen=React.createRef();
    this.backgroundimagesettings=React.createRef();
    this.backgroundcolor1=React.createRef();
    this.backgroundcolor2=React.createRef();
    this.backgroundcolor3=React.createRef();
    const song1 = new Audio(Songs.music1);
    const song2 = new Audio(Songs.music2);
    const song3 = new Audio(Songs.music3);
    const song4 = new Audio(Songs.music4);
    const song5 = new Audio(Songs.music5);
    const song6 = new Audio(Songs.music6);
    const song7 = new Audio(Songs.music7);
    const song8 = new Audio(Songs.music8);
    const song9 = new Audio(Songs.music9);
    this.angle=0;
    this.index=0;
    this.backgroundindex=0;
    this.theme=0;
    this.state={
      songList:[song1,song2,song3,song4,song5,song6,song7,song8,song9],
      angle:0,
      isPlaying:false,
     Barvalue:0,
     Content1:Home,
     Content:[
         Screen,
         Coverflow,
         Home,
         Games,
         Settings,
         Musicplayer
      ]
    }
}
changeinprogressbar=()=>{
  const {songList}=this.state;
  songList[this.index].currentTime=(this.progressRef.current.value*songList[this.index].duration)/100
}
changebackground=()=>{
       this.backgroundindex+=1;
       if(this.backgroundindex>9) this.backgroundindex=0;
        this.backgroundimagesettings.current.style.backgroundImage=`url(${Backgroundlist[this.backgroundindex]})`;
}
updateprogressbar=(event)=>{
  const { currentTime, duration } = event.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  if(currentTime===duration){
    this.setState({
      isPlaying:false
    })
  }
  this.imagerotation.current.style.transform=`rotate(${this.angle}deg)`;
  this.angle+=1;
  this.progressRef.current.value = progressPercent;
}
Play=()=>{
    const {songList}=this.state;
    if(songList[this.index].paused===false){
      songList[this.index].pause();
      this.setState({
        isPlaying:false
      })
      return;
    }
    else{
      songList[this.index].play();
      this.setState({
        isPlaying:true
      })
    }
}
prev=()=>{
  const {songList}=this.state;
  songList[this.index].pause();
  this.index-=1;
  if(this.index>=0){
     songList[this.index].play();
     this.setState({
       isPlaying:true
     })

  }
else{
  this.index=songList.length-1;
  songList[this.index].play();
  this.setState({
   isPlaying:true
 })
}
}
next=()=>{
     const {songList}=this.state;
     songList[this.index].pause();
     this.index+=1;
     console.log(songList.length);
     if(this.index<songList.length){
        songList[this.index].play();
        this.setState({
          isPlaying:true
        })

     }
else{
     this.index=0;
     songList[this.index].play();
     this.setState({
      isPlaying:true
    })
  }
}
Changecontent=(contentnumber)=>{ 
    console.log(contentnumber);
  const {Content}=this.state;
         this.setState({
          Content1:Content[contentnumber]
         })
}
changetheme=()=>{
 if(this.theme===0) {
   this.backgroundcolor1.current.style.backgroundColor="black";
  this.backgroundcolor2.current.style.backgroundColor="grey";
  this.backgroundcolor2.current.style.boxShadow="3px 3px 5px 6px white"
  this.backgroundcolor3.current.style.backgroundColor="grey";
  this.theme=1;
}
else{
  this.backgroundcolor1.current.style.backgroundColor="white";
  this.backgroundcolor2.current.style.backgroundColor="black";
  this.backgroundcolor2.current.style.boxShadow="3px 3px 5px 6px rgb(112, 109, 109)"
  this.backgroundcolor3.current.style.backgroundColor="black";
  this.theme=0;
}
}
  render (){
   const {Content1,Content,Barvalue}=this.state;
  return ( 
    <div className="App" ref={this.backgroundcolor1}>
      <div id="outerdiv" ref={this.backgroundcolor2}>
        <Content1
        Content={Content}
        Changecontent={this.Changecontent}
        Barvalue={Barvalue}
        updateprogressbar={this.updateprogressbar}
        changeinprogressbar={this.changeinprogressbar}
        progress={this.progressRef}
        song={this.state.song1}
        imagerotation={this.imagerotation}
        index={this.index}
        songList={this.state.songList}
        changebackground={this.changebackground}
        backgroundimagehome={this.backgroundimagehome}
        backgroundimagesettings={this.backgroundimagesettings}
        backgroundimagescreen={this.backgroundimagescreen}
        backgroundindex={this.backgroundindex}
        changetheme={this.changetheme}
        />
        <Wheel
        Content={Content}
        Changecontent={this.Changecontent}
        Play={this.Play}
        PlayButton={this.PlayButton}
        Playicon={this.Playicon}
        song={this.state.song1}
        isPlaying={this.state.isPlaying}
        next={this.next}
        prev={this.prev}
        bg={this.backgroundcolor3}/>
        </div>      
    </div>
    );
  }
}

export default App;
