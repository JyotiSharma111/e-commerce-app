import React from 'react'

const ProductCard = ({products, AddtoCart}) => {
  return (
      <div className='product-container' >
    <div className='products-grid' >
        { products.map((p)=>(
            <div key={p.id} className='card'>
            <img src={p.image} height="100px" width="100px"></img>
            <h2 >{p.product}</h2>
            <p> ${p.price}</p>
            <button onClick={()=> AddtoCart(p)}>Add to Cart</button>
            </div>
        ))}
    </div>
    </div>
  )
}

export default ProductCard