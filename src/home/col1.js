import '../styles/home.css'
import {API_URL} from '../config/index'
import { useEffect, useState} from 'react';
import animationData from '../load.json'
import Lottie from 'react-lottie';

function Col1() {

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
<>
{un1.slice(-7).map((un1,i) =>(
    <div className='box' key={i}>

      <dix className='conteudo'>

      
       <div className='in-row'>

 
        <div className='date'>
        13 Nov 2021
        </div>
<a href={un1.attributes.un1.link}>
        <div className='text'>
          
        {
    un1.attributes.un1.title.length >70 ?
    `${un1.attributes.un1.title.substring(0, 70)}...`  :un1.attributes.un1.title
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

export default Col1;