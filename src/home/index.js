import '../styles/home.css'
import Col1 from './col1'
import Col2 from './col2'
import Col3 from './col3'
import Col4 from './col4'
import Col5 from './col5'
import Lottie from 'react-lottie';
import animationData from '../back-ground.json'


function Index() {


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderer: 'svg'
  }

  return(
    <div className='grid-col'>
    <div className='box-logo' >
      ZOHAR
      <div className='svg'> 
      <Lottie 
   
      options={defaultOptions} 
      width={'40vw'}
      /></div>
 
    </div>

   <Col1/>
   <Col2/>
   <Col3/>
   <Col4/>
   <Col5/>
    </div>
  )
 
}
export default Index;