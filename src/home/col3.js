import '../styles/home.css'
import {API_URL} from '../config/index'
import { useEffect, useState} from 'react';
import animationData from '../load.json'
import Lottie from 'react-lottie';

function Col3() {

  const [Loaded, setLoaded] = useState(false)
  const [ukTrend,setukTrend]=useState([])

  const url = `${API_URL}/uktrend`

  useEffect(() => {
    async function fetchMyAPI() {
        let res = await fetch(url)
        res = await res.json()
        setukTrend(res.data)
       
    
  }
  

  Promise.all(ukTrend)
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
    {ukTrend.slice(-5).map((ukTrends,i) =>(
   <div className='box' key={i}>

      <dix className='conteudo3'>

      
       <div className='in-row'>

       <div className='top-grid'>

<div className='top-cell' style={{color:'#012623'}}>
  <div className='radios'>
  UK Trend
  </div>
</div>

<div className='top-cell-date'>
   <div className='date'>
      {ukTrends.date}
      </div>
  </div>

</div>

        <a href={ukTrends.link}>
        <div className='text'>
        {
    ukTrends.title.length >70 ?
    `${ukTrends.title.substring(0, 70)}...`  :ukTrends.title
    }
        </div>
       </a>


       </div>
     
       </dix>
      
    </div>
    ))}
    </>
    )
    :

    <Lottie options={defaultOptions}
height={400}
width={400}/>

}

</>
  )

}
export default Col3;