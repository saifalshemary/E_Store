import { Suspense } from "react";
import FeaturedProducts from "../../components/home/FeaturedProducts";

import Hero from "../../components/home/Hero";
import {LodingContainer} from "../../components/global/LodingContainer";



export default function Home() {
  return (
   <>
     
     <Hero/>
     <Suspense fallback={<LodingContainer/>}>
        <FeaturedProducts />
     </Suspense>
    
   </>
  );
}
