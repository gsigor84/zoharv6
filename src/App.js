import Home from './home/index'
import Header from './header';
import React, { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    document.title = "About Page";  
  }, []);


  return (
    <div className="App">
      <header >
     
         
        <Header/>
      
<Home/>

      </header>
    </div>
  );
}

export default App;
