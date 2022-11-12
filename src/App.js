import React, { useState, useEffect } from 'react';
import Layer5 from './layer5/index'
import Layer4 from './layer4/index'
import Layer3 from './layer3/index'
import Capa from './capa/index'
import Tech from './tech/index'

function App() {



  return (
    <div className="App">
      <header >
        
<Capa/>
<Tech/>
<Layer3/>
<Layer4/>
<Layer5/>

      </header>
    </div>
  );
}

export default App;
