import React from 'react';
import {Nav ,NavLink,Bars ,NavIcon } from "./NavbarElements";


const Navbar = ({ toggle }) => {
    return (
       <div>
           <Nav>
               <NavLink to="/">Burger</NavLink>
               <NavIcon onClick={toggle}>
                  <p>Menu</p>
               </NavIcon>
           </Nav>
       </div>
    )
}

export default Navbar;
