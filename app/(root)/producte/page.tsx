import React from 'react';
import ProductsContainer from '../../../components/products/productsContainer';
import { SearchParams } from 'next/dist/server/request/search-params';





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

