import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Button } from '../ui/button';
import Link from "next/link";
import {links} from '../../utils/links'
import { LuAlignLeft } from 'react-icons/lu';
import { DrobDown } from '../../utils/links';
function DropDownMenu() {
  return (
    <>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
       <Button variant={'outline'} size={'icon'}>
        <LuAlignLeft></LuAlignLeft>
       </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
            {DrobDown.map((link) => (
              <DropdownMenuItem key={link.name}>
                <Link href={link.href }>
                {link.name}
                </Link>
                
              </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
    </DropdownMenu>
    </>
  )
}

export default DropDownMenu
{/* <DropdownMenuItem><Link href={links.HOME.href}> Home</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href={links.ABOUT.href}> About</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href={links.Cart.href}> Cart</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href={links.FAVORITES.href}> Favorites</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href={links.ORDERS.href}> Orders</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href={links.PRODUCTE.href}> Producte</Link></DropdownMenuItem> */}