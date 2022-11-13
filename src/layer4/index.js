import '../styles/layer4.css'
import {API_URL} from '../config/index'
import { useEffect, useState} from 'react';
import Lottie from 'react-lottie';
import animationData from '../load.json'

function Index() {
  const [Loaded, setLoaded] = useState(false)
  const [ukTrends,setUkTrends]=useState([])

  const url = `${API_URL}/api/uktrends?populate=%2A`

  useEffect(() => {
    async function fetchMyAPI() {
        let res = await fetch(url)
        res = await res.json()
        setUkTrends(res.data)
      
    
  }
  

  Promise.all(ukTrends)
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
<div className='layer4'>

{Loaded ? 
(
<div className='tech-layer'>
    <div className='tech-main tech-span-col'>
Uk<span className='shadow'>Trend</span>
    </div>
  {ukTrends.slice(-8).map((ukTrend,i) =>(  
    <> 

 <div className='trend-back'>
 <img 
      src={ukTrend.attributes.uk1.img}
      alt="new"
      />

 </div>
    <div className='tech-main'>
  <a className='in-a' href={ukTrend.attributes.uk1.link}> 
 
  {
  ukTrend.attributes.uk1.title.length >70 ?
  `${ukTrend.attributes.uk1.title.substring(0, 70)}...`  :ukTrend.attributes.uk1.title
  }
</a>
</div>
</>
))}
  </div>

)
:
(
  <Lottie
                options={defaultOptions}
                height={500}
                width={500}
               />
)
}

</div>
  )
}

export default Index;
