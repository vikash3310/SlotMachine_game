
import "./Slot.css";
function getRand(max) {
  return Math.floor(Math.random() * max);
}


// import {FaSignInAlt} from "react-icons/fa"

function Slot() {

  
let x=getRand(3);
let y=getRand(3);
let z=getRand(3);

if(x===0)
x="😉"
else if(x===1)
x="😁"
else
x="😀"

if(y===0)
y="😉"
else if(y===1)
y="😁"
else
y="😀"

if(z===0)
z="😉"
else if(z===1)
z="😁"
else
z="😀"

if(x===y && y===z)
{
  return (
  <>

  <div className="displaybox">
 <div className="parent">
<div className="emojis">
  <span>{x}</span>
  <span>{y}</span>
  <span>{z}</span>
  
</div>

      <h1 className="result">YOU WON</h1>
      </div>
</div>
      
  </>
  );}

  else{
    return (
      <>

       <div className="displaybox">
      <div className="parent">
<div className="emojis">

<span>{x}</span>
<span>{y}</span>
<span>{z}</span>

</div>

      <h1 className="result">Mismatch</h1>
      </div>
</div>
      
      </>
      );
  }
}


export default Slot;
