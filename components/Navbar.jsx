import React, { useState } from 'react'
import Logo from './Logo'
import { 
  NavbarWrapper, 
  NavLinkWrapper, 
  StyledFontAwesomeIcon, 
  StyledNavLink } from '../styles/Navbar.styled';

  

function Navbar() {
  const [active, setActive] = useState(false);
  const link = [
    {
      page: 'Home',
      href: '/',
    },
    
    {page: 'Contact List', href: '/Contact-List'},
    {page: 'ToDo List', href:'/todo-list'},
  ];
  return (
    <NavbarWrapper>
      <Logo />
      <StyledFontAwesomeIcon icon={'bars'}/>
      <NavLinkWrapper active={active}>
        {link.map((link) => (
          <StyledNavLink 
          key={link.page} 
          to={link.href}>
            {link.page}
          </StyledNavLink>
        ))}
        
      </NavLinkWrapper>
    </NavbarWrapper>
    
  )
}

export default Navbar
