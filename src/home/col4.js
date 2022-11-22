import '../styles/home.css'
import {API_URL} from '../config/index'
import { useEffect, useState} from 'react';
import animationData from '../load.json'
import Lottie from 'react-lottie';

function Col4() {

  const [Loaded, setLoaded] = useState(false)
  const [bit,setBit]=useState([])

  const url = `${API_URL}/crypto`

  useEffect(() => {
    async function fetchMyAPI() {
        let res = await fetch(url)
        res = await res.json()
        setBit(res.data)
        console.log(res.data)
    
  }
  
  Promise.all(bit)
  fetchMyAPI().then(() => setLoaded(true))
  .catch(err => console.log("Failed to load images", err))

},[])


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  renderer: 'svg'
}

  return(
    <>
    {Loaded ?
(
  <>
     {bit.slice(0,-10).map((bits,i) =>(
    <div className='box' key={i}>

      <dix className='conteudo4'>

      
       <div className='in-row'>

       <div className='top-grid'>

<div className='top-cell' style={{color:'#012623'}}>
  <div className='radios'>
  Crypto Trend
  </div>
</div>

<div className='top-cell-date'>
   <div className='date'>
      {bits.date}
      </div>
  </div>

</div>


        <a href={bits.link}>
        <div className='text'>
        {
    bits.title.length >70 ?
    `${bits.title.substring(0, 70)}...`  :bits.title
    }
        </div>
       
</a>

       </div>
     
       </dix>
      
    </div>
    ))}
   
    </> )
    :

    <Lottie options={defaultOptions}
height={400}
width={400}/>
  }
  </>
    
  )

}

export default Col4;