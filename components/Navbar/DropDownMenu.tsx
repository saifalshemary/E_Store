import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Button } from '../ui/button';
import Link from "next/link";
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
