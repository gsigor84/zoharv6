import '../styles/home.css'
import {API_URL} from '../config/index'
import { useEffect, useState} from 'react';
import animationData from '../load.json'
import Lottie from 'react-lottie';

function Col3() {

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

  return(
    <>
    {ben.slice(-7).map((bens,i) =>(
    <div className='box' key={i}>

      <dix className='conteudo3'>

      
       <div className='in-row'>

 
        <div className='date'>
        {bens.attributes.ben.date}
        </div>
        <a href={bens.attributes.ben.link}>
        <div className='text'>
        {
    bens.attributes.ben.title.length >70 ?
    `${bens.attributes.ben.title.substring(0, 70)}...`  :bens.attributes.ben.title
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