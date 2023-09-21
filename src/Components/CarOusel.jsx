import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const CarOusel = () => {
  return (
    <div>
       <Carousel slide={false}>
      <Carousel.Item>
        <img src="https://image01.realme.net/general/20230912/1694508133953c50c72be150541eba608fbdde60c9ac5.jpg.webp " alt=" "  text="First slide" />
        <Carousel.Caption style={{marginBottom:"50px" ,marginRight:"300px", color:"black"}}>
          <h2>Realme Buds T300</h2>
          <p>12.4mm Dynamic base driver.</p>
          <bold >From ₹ 2,299</bold>
          <br/>
          <button style={{backgroundColor:"black", color:"white",borderRadius:"10px", padding:"10px"}}>Buy now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://image01.realme.net/general/20230719/168974735201215e939cba4d6496da5d556661dea799d.png.webp " alt='' text="Second slide" />
        <Carousel.Caption  style={{marginBottom:"50px" ,marginRight:"300px", color:"black"}}>
          <h2>Realme C53</h2>
          <p>10* MP champion Like Never Before.</p>
          <bold >From ₹ 11,999</bold>
          <br/>
          <button style={{backgroundColor:"black", color:"white",borderRadius:"10px", padding:"10px"}}>Buy now</button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://image01.realme.net/general/20230914/169467862231421aeea916edd4db29814819857ac8223.jpg.webp " alt=''  text="Third slide" />
        <Carousel.Caption  style={{margintop:"50px" ,marginleft:"400px", color:"black"}}>
          <h2>Realme 11 5G</h2>
          <p>
            Double Ace, Double Leap
          </p>
          <bold >From ₹ 15,999</bold>
          <br/>
          <button style={{backgroundColor:"black", color:"white",borderRadius:"10px", padding:"10px"}}>Buy now</button>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarOusel
