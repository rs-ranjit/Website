import React from 'react'
import { MenuList } from '../helpers/MenuList';
import MenuItems from '../components/MenuItem';
import '../styles/Menu.css';

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
            {MenuList.map((menuItems, key)=>{
                return (
                    <div>
                    <MenuItems 
                    key={key} 
                    image={menuItems.image} 
                    name={menuItems.name} 
                    price={menuItems.price}
                   />
                </div>)
            })}
                
        </div>
    </div>
  )
}

export default Menu