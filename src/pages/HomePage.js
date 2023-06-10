import React, { useState } from 'react'
import {useNavigate} from  'react-router-dom'
// import {useCart} from '../context/cart'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import c01 from '../assets/c01.jpg'
import c02 from '../assets/c02.webp'
import c03 from '../assets/c03.webp'
import c04 from '../assets/c04.jpg'
import anime from '../assets/anime1.webp'
import oversized from '../assets/oversized2.jpg'
import shopmw from '../assets/shopmw.png'
import animebanner from '../assets/carosel1.webp'
import footerbanner from '../assets/footerdesktop-strip.jpg'



const HomePage = () => {
    // const navigate = useNavigate();
    // const [cart, setCart] = useCart();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [checked, setChecked] = useState([]);
    const [radio, setRadio] = useState([]);
    const [total, setTotal] = useState([]);
    const [page, setPage] = useState([]);
    const [loading, setLoading] = useState([]);

    return (
        <>
            <Carousel
             autoPlay={true}
             autoPlaySpeed={1000}
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={c01}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={c02}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={c03}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={c04}
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>

            <Container className='my-32'>
                <h1 className='text-center text-5xl fw-bold my-5'>Trending Categories</h1>
                <Row className='w-75 d-flex align-items-center justify-content-center mx-auto gap-5'>
                   <Col><img src={anime} alt='anime' className='w-100'/><h1 className='text-center fs-2 fw-bold mt-2'>Anime T-Shirt</h1></Col>
                   <Col><img src={oversized} alt='anime' className='w-100'/><h1 className='text-center fs-2 fw-bold mt-2'>OverSized T-Shirt</h1></Col>
                </Row>
            </Container>

            <div className='d-flex align-items-center justify-content-center mx-auto my-5'>
                <img src ={shopmw} alt='shop' className='d-flex w-100 my-5'/>
            </div>


            <div className='d-flex align-items-center justify-content-center mx-auto my-5'>
                <img src ={animebanner} alt='shop' className='d-flex w-100 my-5'/>
            </div>


            <div className='d-flex align-items-center justify-content-center mx-auto my-5'>
                <img src ={footerbanner} alt='shop' className='d-flex w-100 my-5'/>
            </div>

            
        </>
    )
}

export default HomePage