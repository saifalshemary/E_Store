import React from 'react';
import { 
  Breadcrumb ,
   BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';
import { links } from '../../utils/links';

function BreadCrumbs({name}:{name:string}) {
  console.log(name);
  return (
    <Breadcrumb>
  <BreadcrumbList>

    <BreadcrumbItem>
      <BreadcrumbLink href={links.HOME.href} className='capitalize text-lg'>Home</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbSeparator />

    <BreadcrumbItem>
      <BreadcrumbLink href={links.PRODUCTE.href} className='capitalize text-lg'>Products</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbSeparator />

    <BreadcrumbItem>
      <BreadcrumbPage className='capitalize text-lg'>{name}</BreadcrumbPage>
    </BreadcrumbItem>
    
  </BreadcrumbList>
</Breadcrumb>
  )
}

export default BreadCrumbs