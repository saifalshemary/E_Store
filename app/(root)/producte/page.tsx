import React from 'react';
import ProductsContainer from '../../../components/products/productsContainer';





async function ProductePage({searchParams}:any) {

  const {layout = 'grid' , search = ''} = await searchParams ||{};
  

  console.log(typeof search)

  return (
    <div>
      <ProductsContainer layout={layout} search={search}/>
      
    </div>
  )
}

export default ProductePage