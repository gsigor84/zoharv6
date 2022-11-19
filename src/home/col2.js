import '../styles/home.css'
import {API_URL} from '../config/index'
import { useEffect, useState} from 'react';
import animationData from '../load.json'
import Lottie from 'react-lottie';

function Col2() {
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
  <>
{inTrends.slice(-7).map((inTrend,i) =>(
    <div className='box' key={i}>

      <dix className='conteudo2'>

      
       <div className='in-row'>

 
        <div className='date'>
        {inTrend.attributes.in1.date}
        </div>
        <a href={inTrend.attributes.in1.date}>
        <div className='text'>
        {
    inTrend.attributes.in1.title.length >70 ?
    `${inTrend.attributes.in1.title.substring(0, 70)}...`  :inTrend.attributes.in1.title
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
export default Col2;