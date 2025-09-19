import React from 'react';
import ProductsContainer from '../../../components/products/productsContainer';
import { Layout } from 'lucide-react';


interface productsPageParams {
  searchParams:{
    layout:string
    search:string
    
  }
}


async function ProductePage({searchParams}:productsPageParams) {

  const {layout = 'grid'} = await searchParams
  const {search} = await searchParams || '';



  return (
    <div>
      <ProductsContainer layout={layout} search={search}/>
      
    </div>
  )
}

export default ProductePage