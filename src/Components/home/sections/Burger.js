 
import React from 'react';



import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

import './Slider.css';
import Products from './Products.js';

import StarRating from './StarRating';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faClock } from '@fortawesome/free-solid-svg-icons';




import b1 from './slider_img/b1.png'
import b2 from './slider_img/b2.png'
import b3 from './slider_img/b3.png'
import b4 from './slider_img/b4.png'










function Burger() {



    

  return (
    
       <>
     
    <Container>



 
            <Row className="p-3">



                  <CardGroup>


                     
                      <Card >

                        <Card.Body>
                        <Card.Img className="img-fluid" src={b1} />
                          <Card.Title>Big Mac Burger</Card.Title>
                          <Card.Text className="d-flex "><p className="old_price">$15.99</p><p className="new_price">$12.89</p></Card.Text>
                          <div className="d-flex ">
                          <div><StarRating/></div>
                          <div  className="time_text d-flex justify-content-end"><FontAwesomeIcon icon={faClock} className="icon_des"  ></FontAwesomeIcon>
                          <p>30 mins</p></div>
                          </div>
                        </Card.Body>
                      

                       
                     </Card>


                      <Card >
                      
                       
                        <Card.Body>
                        <Card.Img className="img-fluid" src={b2} />
                          <Card.Title>Banana Pancakes</Card.Title>
                          <Card.Text className="d-flex "><p className="old_price">$15.99</p><p className="new_price">$12.89</p></Card.Text>
                          <div className="d-flex ">
                          <div><StarRating/></div>
                          <div  className="time_text d-flex justify-content-end"><FontAwesomeIcon icon={faClock} className="icon_des"  ></FontAwesomeIcon>
                          <p>30 mins</p></div>
                          </div>
                        </Card.Body>
                       
                     </Card>


                        <Card >
                      
                       
                        <Card.Body>
                        <Card.Img className="img-fluid" src={b3} />
                          <Card.Title>Fresh Farm Pizza</Card.Title>
                          <Card.Text className="d-flex "><p className="old_price">$15.99</p><p className="new_price">$12.89</p></Card.Text>
                          <div className="d-flex ">
                          <div><StarRating/></div>
                          <div  className="time_text d-flex justify-content-end"><FontAwesomeIcon icon={faClock} className="icon_des"  ></FontAwesomeIcon>
                          <p>30 mins</p></div>
                          </div>
                        </Card.Body>
                       
                     </Card>

                       <Card >
                      
                       
                        <Card.Body>
                        <Card.Img className="img-fluid" src={b4} />
                          <Card.Title>Fresh Farm Pizza</Card.Title>
                          <Card.Text className="d-flex "><p className="old_price">$15.99</p><p className="new_price">$12.89</p></Card.Text>
                          <div className="d-flex ">
                          <div><StarRating/></div>
                          <div  className="time_text d-flex justify-content-end"><FontAwesomeIcon icon={faClock} className="icon_des"  ></FontAwesomeIcon>
                          <p>30 mins</p></div>
                          </div>
                        </Card.Body>
                       
                     </Card>


                     
                   


                    

                  

                      
                    </CardGroup>
                    </Row>



                    




                    






 </Container>
      
     
    </>
                      );
}

export default Burger;