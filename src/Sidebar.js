import React, { useState } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import './Sidebar.css';
export default props => {
  const [isOpen, setOpen] = useState(false);
  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(false)
  }
  return (
    
    <Menu right isOpen ={isOpen}onOpen={handleIsOpen}
    onClose={handleIsOpen}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" onClick={closeSideBar}href="#about">
        about
      </a>
      <a className="menu-item" onClick={closeSideBar}href="#projects">
        Projects
      </a>
      <a className="menu-item"onClick={closeSideBar}href="#contact">
        Contact
      </a>
    </Menu>
  );
};