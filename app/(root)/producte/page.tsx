import React from 'react';
import ProductsContainer from '../../../components/products/productsContainer';
import { SearchParams } from 'next/dist/server/request/search-params';





async function ProductePage({searchParams}:any) {

  const {layout = 'grid' , search = ''} = await searchParams ||{};
  
  return (
      <ProductsContainer layout={layout} search={search}/>
  )
}

export default ProductePage;

