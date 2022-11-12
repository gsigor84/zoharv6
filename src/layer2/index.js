import {API_URL} from '../config/index'
import { useEffect, useState} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import '../styles/layer2.css'


function Index() {
  
  const [ukTrends,setUkTrends]=useState([])
  const [inTrends,setInTrends]=useState([])
  const [inTech,setInTech]=useState([])

  const url = `${API_URL}/api/uktrends?populate=%2A`
  const url2 = `${API_URL}/api/intrends?populate=%2A`
  const url3 = `${API_URL}/api/techins?populate=%2A`

  useEffect(() => {
    async function fetchMyAPI() {
        let res = await fetch(url)
        res = await res.json()
        setUkTrends(res.data)

    let res2 = await fetch(url2)
    res2 = await res2.json()
    setInTrends(res2.data)

    let res3 = await fetch(url3)
    res3 = await res3.json()
    setInTech(res3.data)
    
    
  }
  fetchMyAPI()
},[])

return(
  <div className='layer2'>
      <div className='l2_title'>
      UK<span className='l2_title2' >Trend </span><WhatshotIcon/>
    </div>
<div className='uk-grid'>
{ukTrends.map((ukTrend,i) =>(
  <>
<div className='uk'>
<img 
      src={ukTrend.attributes.uk1.img}
      alt="new"
      style={{width:'100%', height: 'auto',display: 'block '}}

      />
</div>
<div className='uk'>
<a  href={ukTrend.attributes.uk1.link}>
   {ukTrend.attributes.uk1.title}
   </a>  
   </div>
</>
))}
</div>

<div className='in-t-grind'>
<div className='in-t'>
<div className='l2_title'>
      India<span className='l2_title2' >Trend </span><WhatshotIcon/>
    </div>
   <div className='in-t-grind-c'>

{inTrends.map((inTrend,i) =>(  
<div key={i} className='inner_title'> 
  <a  href={inTrend.attributes.in1.link}> 
  <ArrowForwardIosIcon sx={{ fontSize:' 0.8vw ', paddingInlineEnd:'0.5%'}} />
{inTrend.attributes.in1.title}
</a>
</div>
))}
</div>
</div>

<div className='in-t'>
<div className='l3_title_c'>
      India<span className='l2_title2' >Tech </span><LaptopWindowsIcon/>
    </div>
    <div className='in-t-grind'>

{inTech.slice(-6).map((inTech,i) =>(  
<div key={i} className='inner_title'> 
  <a  href={inTech.attributes.in3.link}> 
  <ArrowForwardIosIcon sx={{ fontSize:' 0.8vw ', paddingInlineEnd:'0.5%'}} />
{inTech.attributes.in3.title}
</a>
</div>
))}
</div>
</div>
</div>

   



  </div>
)

}
export default Index;