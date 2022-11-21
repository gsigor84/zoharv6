import '../styles/home.css'
import {API_URL} from '../config/index'
import { useEffect, useState} from 'react';
import animationData from '../load.json'
import Lottie from 'react-lottie';

function Col1() {

  const [usaTrend,setusaTrend]=useState([])
  const [Loaded, setLoaded] = useState(false)


  const url2 = `${API_URL}/usatrend`
  useEffect(() => {
    async function fetchMyAPI() {

    let res2 = await fetch(url2)
    res2 = await res2.json()
    setusaTrend(res2.data)
    
  }
  
  Promise.all(usaTrend)
  
  fetchMyAPI().then(() =>setLoaded(true))
  .catch(err => console.log("Failed to load images", err))
}, [])

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  renderer: 'svg'
}

  return(
<>
{usaTrend.slice(-4).map((usatrends,i) =>(
    <div className='box' key={i}>

      <dix className='conteudo'>

      
       <div className='in-row'>
<div className='top-grid'>

  <div className='top-cell' style={{color:'#012623'}}>
    <div className='radios'>
    USA Trend
    </div>
  </div>

  <div className='top-cell-date'>
     <div className='date'>
        {usatrends.date}
        </div>
    </div>
  
</div>
 
       
<a href={usatrends.link}>
        <div className='text'>
          
        {
    usatrends.title.length >70 ?
    `${usatrends.title.substring(0, 70)}...`  :usatrends.title
    }
        </div>
       </a>


       </div>
     
       </dix>
      
    </div>
    ))}
</>
  )
}

export default Col1;