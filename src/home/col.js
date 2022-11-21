import '../styles/home.css'
import {API_URL} from '../config/index'
import { useEffect, useState} from 'react';
import animationData from '../load.json'
import Lottie from 'react-lottie';

function Col3() {


  const [Loaded, setLoaded] = useState(false)
  const [ukTrends,setUkTrends]=useState([])

  const url = `${API_URL}/uktrend`

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
    {ukTrends.slice(-5).map((uktrends,i) =>(
   <div className='box' key={i}>

      <dix className='conteudo'>

      
       <div className='in-row'>

 
        <div className='date'>
        {uktrends.date}
        </div>
        <a href={uktrends.link}>
        <div className='text'>
        {
    uktrends.title.length >70 ?
    `${uktrends.title.substring(0, 70)}...`  :uktrends.title
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
export default Col3;