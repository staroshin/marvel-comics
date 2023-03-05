 
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




import p1 from './slider_img/p1.png'
import p2 from './slider_img/p2.png'
import p3 from './slider_img/p3.png'
import p4 from './slider_img/p4.png'
import p5 from './slider_img/p5.png'
import p6 from './slider_img/p6.png'
import p7 from './slider_img/p7.png'
import p8 from './slider_img/p8.png'
import p9 from './slider_img/p9.png'









function Pizza() {



    

  return (
    
       <>
     
    <Container>



 
            <Row className="p-3">



                  <CardGroup>


                     
                      <Card >

                        <Card.Body>
                        <Card.Img className="img-fluid" src={p1} />
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
                        <Card.Img className="img-fluid" src={p2} />
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
                        <Card.Img className="img-fluid" src={p3} />
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
                        <Card.Img className="img-fluid" src={p4} />
                          <Card.Title>Grilled Sandwich</Card.Title>
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



                     <Row className="p-3">



                  <CardGroup>
                      <Card >
                      
                        <Card.Body>
                        <Card.Img className="img-fluid" src={p6} />
                          <Card.Title>Avacado Sandwich</Card.Title>
                          <Card.Text className="d-flex "><p className="old_price">$15.99</p><p className="new_price">$12.89</p></Card.Text>
                          <div className="d-flex ">
                          <div><StarRating/></div>
                          <div  className="time_text d-flex justify-content-end"><FontAwesomeIcon icon={faClock} className="icon_des"  ></FontAwesomeIcon>
                          <p>30 mins</p></div>
                          </div>
                        </Card.Body>
                       
                      </Card>
                       <Card>
                        
                      
                        <Card.Body>
                        <Card.Img className="img-fluid" src={p7} />
                          <Card.Title>Pasta Italiano</Card.Title>
                          <Card.Text className="d-flex "><p className="old_price">$15.99</p><p className="new_price">$12.89</p></Card.Text>
                          <div className="d-flex ">
                          <div><StarRating/></div>
                          <div  className="time_text d-flex justify-content-end"><FontAwesomeIcon icon={faClock} className="icon_des"  ></FontAwesomeIcon>
                          <p>30 mins</p></div>
                          </div>
                        </Card.Body>
                       
                      </Card>
                       <Card>
                        
                       
                        <Card.Body>
                        <Card.Img className="img-fluid" src={p8} />
                          <Card.Title>Shrimp Curry</Card.Title>
                          <Card.Text className="d-flex "><p className="old_price">$15.99</p><p className="new_price">$12.89</p></Card.Text>
                          <div className="d-flex ">
                          <div><StarRating/></div>
                          <div  className="time_text d-flex justify-content-end"><FontAwesomeIcon icon={faClock} className="icon_des"  ></FontAwesomeIcon>
                          <p>30 mins</p></div>
                          </div>
                        </Card.Body>
                       
                      </Card>
                       <Card>
                        
                       
                        <Card.Body>
                        <Card.Img className="img-fluid" src={p9} />
                          <Card.Title>Hot dogs</Card.Title>
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

export default Pizza;