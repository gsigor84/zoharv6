import '../styles/layer2.css'
import {API_URL} from '../config/index'
import { useEffect, useState} from 'react';
import Lottie from 'react-lottie';
import animationData from '../load.json'

function Index() {

  
  const [inTrends,setInTrends]=useState([])
  const [inTech,setInTech]=useState([])
  const [Loaded, setLoaded] = useState(false)

  const url2 = `${API_URL}/api/intrends?populate=%2A`
  const url3 = `${API_URL}/api/techins?populate=%2A`

  useEffect(() => {
    async function fetchMyAPI() {

    let res2 = await fetch(url2)
    res2 = await res2.json()
    setInTrends(res2.data)

    let res3 = await fetch(url3)
    res3 = await res3.json()
    setInTech(res3.data)
  }

  
    Promise.all(inTrends,inTech,)
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
    <div className='layer2'>

{Loaded ? 
(
<>
  <div className='tech-layer'>
  <div className='tech-main tech-span-col'>
India<span className='shadow'>Trend</span>
  </div>
{inTrends.slice(-5).map((inTrend,i) =>(  
  <> 

<div className='trend-back'>
<img 
    src={inTrend.attributes.in1.img}
    alt="new"
    />

</div>
  <div className='tech-main'>
<a className='in-a' href={inTrend.attributes.in1.link}> 

{
inTrend.attributes.in1.title.length >70 ?
`${inTrend.attributes.in1.title.substring(0, 70)}...`  :inTrend.attributes.in1.title
}
</a>
</div>



</>
))}
</div>

<div className='tech-layer2'>
  <div className='tech-main tech-span-col2'>
India<span className='shadow'>Tehc</span>
  </div>
{inTech.slice(-5).map((inTechs,i) =>(  
  <> 
  <div className='tech-main2'>
<a className='in-a2' href={inTechs.attributes.in3.link}> 

{
inTechs.attributes.in3.title.length >80 ?
`${inTechs.attributes.in3.title.substring(0, 80)}...`  :inTechs.attributes.in3.title
}
</a>
</div>



</>
))}
</div> 
</> 
):
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