import React from 'react';
import { Skeleton } from '../ui/skeleton';
import {Card,CardContent } from '../ui/card'


export function LodingContainer() {
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      <LodingProduct/>
      <LodingProduct/>
      <LodingProduct/>
    </div>
  )
}
export function LodingHero() {
  return (
    <div className='pt-12 grid gap-4 '>
      <LodingProduct/>
      
    </div>
  )
}

function LodingProduct(){

return(
    <Card>
      <CardContent className='p-4'>
          <Skeleton className='h-48 w-full' />
          <Skeleton className='h-4  w-3/4 mt-4' />
          <Skeleton className='h-1  w-3/4 mt-4' />
      </CardContent>
    </Card>
)

}

