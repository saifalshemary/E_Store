import React from 'react'
import {fetchSinglProducts} from '../../../../utils/actions';
import BrandCrumbs from '../../../../components/single-product/BrandCrumbs';
import Image from 'next/image';
import FavoriteToggleButton from '../../../../components/products/FavoriteToggleButton';
import ProductRating from '../../../../components/single-product/ProductRating';
import { formatCurrency } from '../../../../utils/format';
import AddToCart from '../../../../components/single-product/AddToCart';

interface PageProps {
  params: {
    id: string;
  };
}

async function productsDetailsPage({params}:PageProps ) {

    const { id } = params ;

    const product = await fetchSinglProducts({productID:  id});

    const Price = formatCurrency(product.price);
  return (
    <section>
      <BrandCrumbs name={product.name}/>
      <section className='grid lg:grid-cols-2 gap-y-6 mt-6 lg:gap-x-12' >
        <div className='relative h-full '>
          <Image 
          src={product.image}
          alt={product.name}
          fill
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw , 33vw'
          className='w-full rounded-md object-cover'/>
        </div>
        <div >
          <div className='flex gap-x-8 items-center'>
            <h2 className='text-3xl capitalize font-bold'>{product.name}</h2>
            <FavoriteToggleButton productsId={product.id} />
          </div>
        
        <ProductRating Product={product.name}/>
        <h4 className='text-md p-2 mt-3 rouned-md bg-muted inline-block'>{Price}</h4> 
        <p className='mt-6 leading-8'>{product.description}</p>
        <AddToCart productId={product.id}/>
        </div>
      </section>
    </section>
  )
}

export default productsDetailsPage