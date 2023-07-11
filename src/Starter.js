

import {FaSignInAlt} from "react-icons/fa"
import "./Starter.css";
import { useState } from 'react';
import slost from "./iimg.png";
import { Outlet, Link } from "react-router-dom";
import ado from "./musicgame.mp3";
let audio = new Audio(ado);

audio.play()

let curtime=new Date().getHours();
let curtime2=new Date().getMinutes();


function Starter() {
  const [t,changetime]=useState(curtime);
  const [t2,changetime2]=useState(curtime2);
  
  setTimeout(()=>{let curtime=new Date().getHours();
    let curtime2=new Date().getMinutes();changetime(curtime);changetime2(curtime2)},1000)
    return (
      <>
  
  <nav className="navi">
    <pre>Time {t}:{t2} |    </pre>
  SPIN it up<span>  <pre>    😀 😁 😉   </pre></span><FaSignInAlt style={{textAlign:"right"}}/>
  </nav>  
  <div className="iimmhh">

      <img className="lologo" src={slost} alt="" />
      
      <button className="playy"><Link to="/slot">Play</Link></button>
  </div>
 

<div><marquee behavior="" direction="left"> 🍒 🌸 ❤️ 😍 😊 😉 😀 😂 😘 😁  😢 😃 😎 🤩 😘 😚 🙂 🫡 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🫥 😯 🤐 😪 😫 🥱 😕 ☹️ 
 🍒 🌸 ❤️ 😍 😊 😉 😀 😂 😘 😁 👍 😢 😃 😎 🤩 😘 😚 🙂 🫡 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🫥 😯 🤐 😪 😫 🥱 😕 ☹️ 
 🍒 🌸 ❤️ 😍 😊 😉 😀 😂 😘 😁 👍 😢 😃 😎 🤩 😘 😚 🙂 🫡 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🫥 😯 🤐 😪 😫 🥱 😕 ☹️ 
 🍒 🌸 ❤️ 😍 😊 😉 😀 😂 😘 😁 👍 😢 😃 😎 🤩 😘 😚 🙂 🫡 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🫥 😯 🤐 😪 😫 🥱 😕 ☹️ 
 🍒 🌸 ❤️ 😍 😊 😉 😀 😂 😘 😁 👍 😢 😃 😎 🤩 😘 😚 🙂 🫡 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🫥 😯 🤐 😪 😫 🥱 😕 ☹️ </marquee></div>

  </>
  );
}

export default Starter;
