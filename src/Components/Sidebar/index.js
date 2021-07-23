import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';



const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/' >Burger</SidebarLink>
        <SidebarLink to='/Starters'>Starters</SidebarLink>
        <SidebarLink to='/Desserts'>Desserts</SidebarLink>
        <br/>
        <SidebarLink to='/Beverages'>Beverages</SidebarLink>
        <br/>
        <br/>
        <br/>
        <SidebarLink to='/full menu'>Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;