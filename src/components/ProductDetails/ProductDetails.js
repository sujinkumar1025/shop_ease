import React, { useState } from 'react'
import './ProductDetails.css'
import { useEffect } from 'react';
import { getProductId } from '../../ApiService/api';
import { Link, useParams } from 'react-router-dom';

function ProductDetails() {

  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({})


  useEffect(() => {

    const fetchProductDetails = async () => {
      const data = await getProductId(id)
      setProductDetails(data)
    }
    fetchProductDetails()
  }, [id])

  return (
    <div className='product-details'>
      <img src={productDetails.image} alt="image" className='image-gallery' />
      <div className='product-info'>
        <h2 className='product-title'>{productDetails.title}</h2>

        <p className='description'>{productDetails.description}</p>

        <p className='product-price'>${productDetails.price}</p>

        <button type="" className='add-to'>Buy Now</button>
        <Link to="/" className="back-link">
          <button type="button" className="back-button">Go Back</button>
        </Link>


      </div>
    </div>
  )
}

export default ProductDetails
