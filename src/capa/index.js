import '../styles/capa.css'
import {API_URL} from '../config/index'
import { useEffect, useState} from 'react';
import Lottie from 'react-lottie';
import animationData from '../load.json'

function Index() {

  const [un1,setUn1]=useState([])
  const [Loaded, setLoaded] = useState(false)

  const url2 = `${API_URL}/api/un1news?populate=%2A`
  useEffect(() => {
    async function fetchMyAPI() {

    let res2 = await fetch(url2)
    res2 = await res2.json()
    setUn1(res2.data)
    
  }
  
  Promise.all(un1)
  
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
<div className='capa'>
{Loaded ? 
(
  <div className='capa-layer'>
<div className='capa capa-span-col'>Trends</div>
{un1.slice(-7).map((un1,i) =>(
  <a href={un1.attributes.un1.link} >
  <div className='capa-main'>
        {
    un1.attributes.un1.title.length >50 ?
    `${un1.attributes.un1.title.substring(0, 50)}...`  :un1.attributes.un1.title
    }
    
  </div></a>
))}

</div>
) :
(

  <Lottie
                options={defaultOptions}
                height={500}
                width={500}
               />
)}


</div>
)
}
export default Index;