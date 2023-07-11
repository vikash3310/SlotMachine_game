
// import Navbar from './Navbar';
import './App.css';
import './Slot.css';
import {FaSignInAlt} from "react-icons/fa"

import Slot from './Slot';
import { useState } from 'react';

import { Link } from 'react-router-dom';



function getRand(max) {
  return Math.floor(Math.random() * max);
}
let curtime=new Date().getHours();
let curtime2=new Date().getMinutes();


function App() {
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
 

  <section className="contents"><Slot/>
  <Link to="/"><button style={{fontSize:"xx-large"}}>Spin 🎰</button></Link>
  </section>
   
  </>
  );
}

export default App;
