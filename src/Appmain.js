
import App from "./App";
import Starter from "./Starter";
import React from "react";
import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";

function Appmain() {
    return(
<>
<Router>
      <Routes>
        <Route path="/" element={<Starter />}/>
        <Route path="/slot" element={<App />}/>
        <Route path="/Slot" element={<App />}/>
        
       
      </Routes>
    </Router>
</>
  );
}

export default Appmain;
