import '../styles/home.css'
import {API_URL} from '../config/index'
import { useEffect, useState} from 'react';
import animationData from '../load.json'
import Lottie from 'react-lottie';

function Col4() {

  const [Loaded, setLoaded] = useState(false)
  const [bit,setBit]=useState([])

  const url = `${API_URL}/api/bitcoins?populate=%2A`

  useEffect(() => {
    async function fetchMyAPI() {
        let res = await fetch(url)
        res = await res.json()
        setBit(res.data)
        console.log(res.data)
    
  }
  
  Promise.all(bit)
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
     {bit.slice(-7).map((bits,i) =>(
    <div className='box' key={i}>

      <dix className='conteudo5'>

      
       <div className='in-row'>

 
        <div className='date'>
        13 Nov 2021
        </div>
        <a href={bits.attributes.bit1.link} style={{color:'#012623'}}>
        <div className='text'>
        {
    bits.attributes.bit1.title.length >70 ?
    `${bits.attributes.bit1.title.substring(0, 70)}...`  :bits.attributes.bit1.title
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