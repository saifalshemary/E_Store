import React from 'react';
import ProductsContainer from '../../../components/products/productsContainer';


interface PropsPage{
  searchParams: {
    layout?: string;
    search: string;
  }
}

async function ProductePage({searchParams}:PropsPage) {

  const {layout = 'grid'} = await searchParams;
  const {search} = await searchParams || '';

  console.log(typeof search)

  return (
    <div>
      <ProductsContainer layout={layout} search={search}/>
      
    </div>
  )
}

export default ProductePage