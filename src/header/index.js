import React, { useState, useEffect } from 'react';
import '../styles/header.css'
import HomeIcon from '@mui/icons-material/Home';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import animationData from '../load.json'
import Lottie from 'react-lottie';


function Header() {



  return (

    <>
    
    
    <div className="header">
      <div className='cell'>
        <div className='inner'>
          <div className='menu'>
          USA
          </div>
<div className='barra1'>

</div>
        </div>
       

      </div>


      <div className='cell'>
      <div className='inner'>
          <div className='menu'>
          Asia
          </div>
<div className='barra2'>

</div>
        </div>
      </div>

      <div className='cell'>
      <div className='inner'>
          <div className='menu'>
          UK
          </div>
<div className='barra3'>

</div>
        </div>
      </div>

      <div className='cell'>
      <div className='inner'>
          <div className='menu'>
          Crypto
          </div>
<div className='barra4'>

</div>
        </div>
      </div>
   

      
      <div className='cell'>
      <div className='inner'>
          <div className='menu'>
       <HomeIcon/> <a href='https://alsoasked.com/' style={{color:'white'}}><PsychologyAltIcon/></a>
          </div>

        </div>
      </div>
  
      

    </div>
    <div className='mobile-menu'><a href='https://alsoasked.com/' style={{color:'white'}}><PsychologyAltIcon/></a></div>

    </>
  );
}

export default Header;
