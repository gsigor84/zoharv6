import '../styles/layer3.css'
import {API_URL} from '../config/index'
import { useEffect, useState} from 'react';
import Lottie from 'react-lottie';
import animationData from '../load.json'

function Index() {
  
  const [ben,setBen]=useState([])
  const [Loaded, setLoaded] = useState(false)

  const url = `${API_URL}/api/benzinas?populate=%2A`

  useEffect(() => {
    async function fetchMyAPI() {
        let res = await fetch(url)
        res = await res.json()
        setBen(res.data)
  }
  

  
  Promise.all(ben)
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
    <div className="layer3">
{Loaded ? 
(
  <div className='main-layer'>
  <div className='main-span-col'>Benzinga</div>
{ben.slice(-7).map((bens,i) =>(  
  <a  href={bens.attributes.ben.link}>
<div className='main'>
{
  bens.attributes.ben.title.length >5 ?
  `${bens.attributes.ben.title.substring(0, 50)}...`  :bens.attributes.ben.title
  }
</div>
</a>

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