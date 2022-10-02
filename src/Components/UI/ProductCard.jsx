import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import productImg from '../../assets/images/arm-chair-01.jpg';
import '../../Styles/Product-card.css';

const ProductCard = () => {
  return (
    <Col lg='3' md='4'>
     <div className='product_item'>
       <div className="product_img">
        <motion.img whileHover={{scale: 0.9}} src={productImg} alt="" />
       </div>
        <div className='p-2 product_info'>
        <h3 className="product_name"><Link to='/shop/id'>Modern Armchair</Link></h3>
         <span>Chair</span>
        </div>
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
          <span className='price'>$299</span>
          <motion.span whileHover={{scale: 1.2}}><i class="ri-add-line"></i></motion.span>
        </div>
    </div>
    </Col>
  );
};

export default ProductCard;