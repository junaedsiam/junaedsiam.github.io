import Container from 'components/container'
import React from 'react'
import clsx from 'clsx'
import NavMenu from './navMenu'

const Navbar = () => {
  return (
    <nav className="py-4">
      <Container className="flex items-center justify-between">
        <a href="#" className="flex">
          <img src="/image/junaedsiam-logo.svg" alt="branding" className="w-48" />
        </a>
        <div className={clsx('flex justify-end flex-grow font-medium space-x-7 text-primary')}>
          <NavMenu url="#" title="Home" />
          <NavMenu url="#" title="Blog" />
          <NavMenu url="#" title="Portfolio" />
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
