import React from 'react'
import tablelamp from '../assets/lamp3.jpg'

const ProductCard = () => {

    const divStyle = {
        // width: '100vw',
        // height: '80vh',
        width:'70vw',
        height:'65vh',
        backgroundImage: `url(${tablelamp})`,
        backgroundSize: 'cover', // Adjusts the background image to cover the whole container
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents the background image from repeating
        paddingTop: '74px'
   
    }
  return (
    <div>
        <div style={divStyle} />
        <p>Italian </p>
    </div>
  )
}

export default ProductCard