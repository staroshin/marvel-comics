import React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Slider.css';
import axios from 'axios';

function All() {

const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [url, setUrl] = useState('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=637fb781eb2a3ab8dea7488ffd4a826d&hash=4b650fb2fee0eef8312076da5c9c57f2');

useEffect(() => {
   const fetch = async () => {
      const res =await axios.get(url);
      setItems(res.data.data.results);
   }
   fetch();   
  }, [url])

  return (
    
       <>
     
    <Container>
            <Row >
                  {items.map(item => ( 
                     <Col md="4">
                       <a href={`/details/${item.id}`} >
                      <Card className="mb-4 comics">
                        <Card.Body>
                        <Card.Img className="img-fluid" src={item.thumbnail.path + "." + item.thumbnail.extension }  />
                            <Card.Title  className="slider_card">{item.title}</Card.Title>
                            <p>Price: {item.prices.price}</p>
                        </Card.Body>
                     </Card>
                     </a>
                     </Col>
                    ))}
              </Row>
      </Container>
    </>
           );
}

export default All;