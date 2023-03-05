import React from 'react';
import './menu.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import {useState} from "react";
import {useEffect} from "react";


function Comics() {

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
      <Row className='d-flex justify-content-center'>
        <Col md={6}>
            <h1 className="text-center p-4">Best Comics!</h1>
        </Col>
      </Row>
    </Container>
    <Container>
    <Row >
          {items.map(item => ( 
             <Col md="4">
              <Card className="mb-4 comics">
                <Card.Body>
                <Card.Img className="img-fluid" src={item.thumbnail.path + "." + item.thumbnail.extension }  />
                    <Card.Title  className="slider_card">{item.title}</Card.Title>
                    <p>Price: {item.prices.price}</p>
                    <a href={item.resourceURI} className='btn btn-primary'>Read more</a>
                </Card.Body>
             </Card>
             </Col>
            ))}
      </Row>
</Container>


 
    
   
</>
  );

  
}


export default Comics;