import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"
import db from '../../utils/db'
import Image from 'next/image';


async function HeroCarousel() {

  const hero = await db.hero.findMany();



  return (
  <Carousel>
      <CarouselContent>


        {
          hero.map((item)=>(
             <CarouselItem key={item.id}> 
            <div className='p-2 border-1 border-gray-100 rounded-lg '>
              <Image 
              src={'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?_gl=1*12om0b4*_ga*MTM5NTI2MzkyNy4xNzUyMTg3ODM5*_ga_8JE65Q40S6*czE3NTcyNjMzNjUkbzUkZzEkdDE3NTcyNjMzNzgkajQ3JGwwJGgw'}
              width={400}
              height={400}
              priority
              alt='hero image'
              className='object-cover w-full h-[440px] rounded-md'
              />
            </div>
          </CarouselItem>
          ))
        }
          
         
      </CarouselContent>

      <CarouselPrevious />

      <CarouselNext />
</Carousel>
  )
}

export default HeroCarousel
  
          