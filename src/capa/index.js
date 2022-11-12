import '../styles/capa.css'
import {API_URL} from '../config/index'
import { useEffect, useState} from 'react';

function Index() {
  
  const [ukTrends,setUkTrends]=useState([])

  const [un1,setUn1]=useState([])


  const url = `${API_URL}/api/uktrends?populate=%2A`
  const url2 = `${API_URL}/api/un1news?populate=%2A`
  useEffect(() => {
    async function fetchMyAPI() {

    let res = await fetch(url)
    res = await res.json()
    setUkTrends(res.data)

    let res2 = await fetch(url2)
    res2 = await res2.json()
    setUn1(res2.data)
  }
  fetchMyAPI()
},[])


return(
<div className='capa'>
<div className='capa-layer'>
<div className='capa capa-span-col'>Trends</div>
{un1.slice(-6).map((un1,i) =>(
  <a href={un1.attributes.un1.link} >
  <div className='capa-main'>
        {
    un1.attributes.un1.title.length >50 ?
    `${un1.attributes.un1.title.substring(0, 50)}...`  :un1.attributes.un1.title
    }
    
  </div></a>
))}

</div>
</div>
)
}
export default Index;