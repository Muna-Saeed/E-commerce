import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_product_cart from '../../assets/add_product_cart.svg'
import product_list_icon from '../../assets/product_list_icon.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src={add_product_cart} alt="" />
            <p>Add Products</p>
        </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src={product_list_icon} alt="" />
            <p>Products List</p>
        </div>
        </Link>
    </div>
  )
}

export default Sidebar