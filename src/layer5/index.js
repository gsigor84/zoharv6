import '../styles/layer5.css'
import {API_URL} from '../config/index'
import { useEffect, useState} from 'react';

function Index() {
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
  fetchMyAPI()
  Promise.all(bit)
  .then(() => setLoaded(true))
  .catch(err => console.log("Failed to load images", err))

},[])

return(
<div className='layer5'>

{Loaded ? 
(

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
):(
  <h1>Loading</h1>
)
}
</div>

)
}

export default Index;