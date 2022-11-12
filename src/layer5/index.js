import '../styles/layer5.css'
import {API_URL} from '../config/index'
import { useEffect, useState} from 'react';

function Index() {

  const [bit,setBit]=useState([])

  const url = `${API_URL}/api/bitcoins?populate=%2A`

  useEffect(() => {
    async function fetchMyAPI() {
        let res = await fetch(url)
        res = await res.json()
        setBit(res.data)
        console.log(res.data)
    
  }
  fetchMyAPI()
},[])

return(
<div className='layer5'>
<div className='crypto-layer'>
  <div className='crypto-span-col'>
    Crypto
  </div>
  {bit.map((bitcoin,i) =>( 
    <>
    
     <div className='crypto-back'>
     <a className='crypto-a' href={bitcoin.attributes.bit1.link}> 
 <img 
      src={bitcoin.attributes.bit1.img}
      alt="new"
      />
</a>
 </div>
<div className='crypto-main'>
<a className='crypto-a' href={bitcoin.attributes.bit1.link}> 
 
 {
 bitcoin.attributes.bit1.title.length >70 ?
 `${bitcoin.attributes.bit1.title.substring(0, 70)}...`  :bitcoin.attributes.bit1.title
 }
</a>
</div>

</>
   ))}
   

</div>
</div>

)
}

export default Index;