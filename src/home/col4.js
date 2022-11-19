import '../styles/home.css'
import {API_URL} from '../config/index'
import { useEffect, useState} from 'react';
import animationData from '../load.json'
import Lottie from 'react-lottie';

function Col4() {

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
    <>
    {ukTrends.slice(-7).map((uktrends,i) =>(
   <div className='box' key={i}>

      <dix className='conteudo4'>

      
       <div className='in-row'>

 
        <div className='date'>
        13 Nov 2021
        </div>
        <a href={uktrends.attributes.uk1.link}>
        <div className='text'>
        {
    uktrends.attributes.uk1.title.length >70 ?
    `${uktrends.attributes.uk1.title.substring(0, 70)}...`  :uktrends.attributes.uk1.title
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
export default Col4;