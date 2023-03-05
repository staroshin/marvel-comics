import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode} from "swiper"
import 'swiper/css';
import "swiper/css/free-mode"
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from "react";
import {useEffect} from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import './Products.css';




const Products = () => {
 

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [url, setUrl] = useState('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=637fb781eb2a3ab8dea7488ffd4a826d&hash=4b650fb2fee0eef8312076da5c9c57f2');
  
  useEffect(() => {
     const fetch = async () => {
        const res =await axios.get(url);
        setItems(res.data.data.results);
     }
     fetch();   
    }, [url])
    

  return (
    <div className = "Container py-4 px-4 justify-content-center">
     

        <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        slidesPerView={3.5}
        spaceBetween={60}
        
        >

        {items.map(item => ( 
   
            <SwiperSlide> 
          
            <Col md="12">
                      <Card className="mb-4 comics">
                        <Card.Body>
                        <Card.Img className="img-fluid" src={item.thumbnail.path + "." + item.thumbnail.extension }  />
                            <Card.Title  className="slider_card">{item.name}</Card.Title>
                        </Card.Body>
                     </Card>
                     </Col>
            </SwiperSlide>
                ))}
       


        </Swiper>





    </div>
       
                      );
};

export default Products;