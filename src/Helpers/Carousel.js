import React, { useState} from 'react'
import '../Styling/Components.css'
import{ images } from '../Helpers/CarouselData'
import ArrowBackIOSIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIOSIcon from '@mui/icons-material/ArrowForwardIos'

function Carousel() {

  const [currImg, setCurrImg] = useState(0)

  return (
    <div className='carousel'>
        <div 
          className='carousel-inner' 
          style={{backgroundImage:`url(${images[currImg].img})`}}
        >
          <div className='left' 
            onClick={()=> {
              setCurrImg(currImg === 0 ? images.length-1  : currImg - 1)
            }}>
            <ArrowBackIOSIcon style={{ fontSize:40 }}/>
          </div>
          <div className='center'>
            {/* <h1>{images[currImg].title}</h1> */}
          </div>
          <div className='right'onClick={()=> {
              setCurrImg(currImg === images.length-1 ? 0 : currImg + 1)
            }}>
            <ArrowForwardIOSIcon style={{ fontSize:40 }}/>
          </div>
        </div>
    </div>
  )
}

export default Carousel

