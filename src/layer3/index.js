import '../styles/layer3.css'
import {API_URL} from '../config/index'
import { useEffect, useState} from 'react';

function Index() {
  
  const [ben,setBen]=useState([])

  const url = `${API_URL}/api/benzinas?populate=%2A`

  useEffect(() => {
    async function fetchMyAPI() {
        let res = await fetch(url)
        res = await res.json()
        setBen(res.data)
  }
  fetchMyAPI()
},[])

  return(
    <div className="layer3">
<div className='main-layer'>
  <div className='main main-span-col'>Benzinga</div>
{ben.map((bens,i) =>(  
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

    </div>

  )
}

export default Index;