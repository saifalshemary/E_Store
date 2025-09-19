import React from 'react'

function ProductRating({Product}:{Product:string}) {
  const rating =4.2;
  const reviews =42;
  const ReviewsText = `(${reviews} Reviews)`
  return (
    <span className='mt-1 mb-4 text-md flex gap-1 item-center'>
      <FaStar className='w-3 h-3'/>
      {rating} {ReviewsText} 
    </span>
  )
}
import { FaStar } from 'react-icons/fa';

export default ProductRating