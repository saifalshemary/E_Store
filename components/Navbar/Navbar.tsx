import React, { Suspense } from 'react';
import Container from '../global/container';
import Logo from './Logo';
import NavSearsh from './NavSearsh';
import CartButton from './CartButton';
import DarkMode from './DarkMode';
import DropDownMenu from './DropDownMenu';
function navbar() {
  return (
    <nav className='border-b'>
      <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
          <Logo />
          <Suspense>
            <NavSearsh/>
          </Suspense>

          <div className='flex gap-4 items-center'>
            <CartButton/>
            <DarkMode/>
            <DropDownMenu/>
          </div>
      </Container>
    </nav>
  )
}

export default navbar