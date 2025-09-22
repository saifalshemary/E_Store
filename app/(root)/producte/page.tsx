import React from 'react';
import ProductsContainer from '../../../components/products/productsContainer';



type Props= {
  layout?: 'grid' | 'list';
  search?: string;
}


async function ProductePage({searchParams}:{searchParams:Props}) {

  const {layout = 'grid' , search = ''} = await searchParams ||{};
  
  return (
      <ProductsContainer layout={layout} search={search}/>
  )
}

export default ProductePage;

