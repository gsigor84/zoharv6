import '../styles/home.css'
import {API_URL} from '../config/index'
import { useEffect, useState} from 'react';
import animationData from '../load.json'
import Lottie from 'react-lottie';

function Col2() {
  const [inTrends,setInTrends]=useState([])
  const [Loaded, setLoaded] = useState(false)

  const url2 = `${API_URL}/indiatrend`

  useEffect(() => {
    async function fetchMyAPI() {

    let res2 = await fetch(url2)
    res2 = await res2.json()
    setInTrends(res2.data)

  }

  
    Promise.all(inTrends)
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
{inTrends.slice(-5).map((inTrend,i) =>(
    <div className='box' key={i}>

      <dix className='conteudo2'>

      
       <div className='in-row'>

 
       <div className='top-grid'>

<div className='top-cell' style={{color:'#012623'}}>
  <div className='radios'>
  Asia Trend
  </div>
</div>

<div className='top-cell-date'>
   <div className='date'>
      {inTrend.date}
      </div>
  </div>

</div>

        <a href={inTrend.link}>
        <div className='text'>
        {
    inTrend.title.length >70 ?
    `${inTrend.title.substring(0, 70)}...`  :inTrend.title
    }
        </div>
       </a>


       </div>
     
       </dix>
      
    </div>
    ))}
</>
):
<Lottie options={defaultOptions}
height={400}
width={400}/>
}

</>
  
)

}
export default Col2;