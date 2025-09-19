import React from 'react'

function AboutPage() {
  return (
    <div>
      <h1 className='flex flex-wrap text-center items-center justify-center gap-2 text-4xl font-bold sm:text-6xl leading-none traking-wide sm:gap-x-6'>
        We Love 

        <span className='bg-blue-500 px-4 py-2 rounded-lg tracking-widest text-white'>
           store
           </span>
      </h1>
      <p className='mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground text-center '>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus voluptatum natus odio, minus consequuntur, enim, ut id doloremque architecto accusamus ipsa! Odio fuga similique rem. Ipsa blanditiis deleniti autem dolore.
      </p>
    </div>
  )
}

export default AboutPage