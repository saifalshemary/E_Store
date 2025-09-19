'use server';

import { redirect } from 'next/navigation';
import db from './db';

export async function fetchFeaturedProducts() {
  try {
    const products = await db.product.findMany({
      where: {
        featured: true,
      }
    });
    
    return products;
  } catch (error) {
    console.error('Error fetching featured products:', error);
    throw new Error('Failed to fetch featured products');
  }
}

export async function fetchAllProducts({search =''}:{search:string}) {
  

    const products = await db.product.findMany({

      where:{
        OR:[
          {
            name: { contains:search , mode:'insensitive'}
          }
        ]
      },

      orderBy: {
        createdAt: 'desc'
      }
    });
    return products;
  } 

export async function fetchSinglProducts({productID}:{productID:string}){
  const product = await db.product.findUnique({
    where :{
      id : productID
    },
  })
  if (!product) {
      redirect ('/products')
  }

  return product
}
  
