import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <>
    <div className='banner'>
         

             
      <div className='box1'>
         <h5>Realme Buds Air 5</h5>
         <img src='https://image01.realme.net/general/20230810/1691642504847e8a2a627848f4dbfabe2fd2bcf425e01.png.webp?width=1440&height=1440&size=320866  '/>
         <h5>From ₹ 2,299</h5>
         <button className='btn' style={{backgroundColor:"black", color:"white",borderRadius:"10px", padding:"10px"}}>Buy now</button>
      </div>
      <div className='box1'>
      <h5>Realme Watch R100</h5>
        <img src='https://image01.realme.net/general/20220609/1654748381795.png.webp'/>
        <h5>From ₹ 9,999</h5>
         <button className='btn' style={{backgroundColor:"black", color:"white",borderRadius:"10px", padding:"10px"}}>Buy now</button>
      </div>
      <div className='box1'>
        <h5>Realme Buds Wireless 3</h5>

        <img src='https://image01.realme.net/general/20230621/1687318015656f406a0f0eb71439c958bd2b3e8f2ced2.png?width=1440&height=1440&size=126923.webp '/>
        <h5>From ₹ 1,299</h5>
         <button className='btn' style={{backgroundColor:"black", color:"white",borderRadius:"10px", padding:"10px"}}>Buy now</button>
      </div>

    </div>
    </>
  )
}

export default Banner
