import React from 'react'
import { Button } from '../ui/button'

function AddtoCart({productID}:{productID:string}) {
  return (
    <Button className='mt-8 capitalize ' size={'lg'}>
      Add To Cart
    </Button>
  )
}

export default AddtoCart