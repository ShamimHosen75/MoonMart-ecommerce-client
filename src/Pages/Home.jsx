import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import products from "../assets/data/products";
import CounterImg from "../assets/images/counter-timer-img.png";
import heroImg from '../assets/images/hero-img.png';
import Helmet from '../Components/Helmet/Helmet';
import Clock from '../Components/UI/Clock';
import ProductList from '../Components/UI/ProductList';
import Services from '../Services/Services';
import "../Styles/Home.css";

const Home = () => {

  const [trendingProducts, setTrendingProducts]= useState([]);
  const [bestSalesProducts, setBestSalesProducts]= useState([]);
  const [mobileProducts, setMobileProducts] = useState ([]);
  const [wirelessProducts, setWirelessProducts] = useState ([]);
  const [popularProducts, setPopularProducts] = useState ([]);

  const year = new Date().getFullYear()


  useEffect(() =>{
    const filteredTrendingProducts = products.filter(
      (item) => item.category === 'chair');

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === 'sofa');

    const filteredMobileProducts = products.filter(
      (item) => item.category === 'mobile');

    const filteredWirelessProducts = products.filter(
      (item) => item.category === 'wireless');

    const filteredPopularProducts = products.filter(
      (item) => item.category === 'watch');

      setTrendingProducts(filteredTrendingProducts);
      setBestSalesProducts(filteredBestSalesProducts);
      setMobileProducts(filteredMobileProducts);
      setWirelessProducts(filteredWirelessProducts);
      setPopularProducts(filteredPopularProducts);
  }, []);

  return (
    <Helmet title={'Home'}>
      <section className='hero_section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero_content">
                <p className="hero_subtitle">Trending Product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ex hic dolorem odit, cupiditate porro fugiat sunt iste vero laudantium.</p>

                <motion.button whileTap={{scale:1.2}} className='buy_btn'><Link to='/shop'>SHOP NOW</Link></motion.button>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className='hero_img'>
                  <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section_title pb-2'>Trending Products</h2>
            </Col>
            <ProductList data ={trendingProducts}/>
          </Row>
        </Container>
      </section>

      <section className="best_sales">
        <Container>
        <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section_title pb-2'>Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer-count">
        <Container>
          <Row>
            <Col lg='6' md='6'>

              <div className="clock-top-content">
                <h4 className='text-white fs-4 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-6 mb-3'>Quality Armchair</h3>
              </div>
              <Clock></Clock>

              <motion.button 
              whileTap={{scale:1.2}} 
              className="buy-btn store-btn mt-3">
                <Link to='/shop'>Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg='6' md='6' className='text-end'>
              <img src={CounterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new-arrivals">
        <Container>
          <Row>
          <Col lg='12' className='text-center'>
              <h2 className='section_title pb-3'>New Arrivals</h2>
            </Col>
              <ProductList data = {mobileProducts} />
              <ProductList data = {wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular-category">
      <Container>
          <Row>
          <Col lg='12' className='text-center'>
              <h2 className='section_title pb-5'>Popular in Category</h2>
            </Col>
              <ProductList data = {popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;