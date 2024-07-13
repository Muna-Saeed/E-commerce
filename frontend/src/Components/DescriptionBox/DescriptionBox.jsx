import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Review (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates buying and selling of products or services over the internet.</p>
            <p>E-commerce website typically display products or services along with a detailed descriptions, images, prices and any available variation(e.g sizes, colors).</p>
        </div>
    </div>
  )
}

export default DescriptionBox
