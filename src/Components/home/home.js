import React from 'react';
import './home.css';
import {useState} from "react";
import Products from './sections/Products.js';
import TabsOfCat from './sections/TabsOfCat.js';
import home_img from './img/home_img.png'
import people from './img/people.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
    const [count, setCount] = useState(0);  
  return (
  	<div className="home" id="home">
    <div className="part">
    <Container>
    <Row className="justify-content-center">
      <Row className="custom_row">
          <Col md={6}>                                  
          <h1>CREATE AWESOME STUFF <br/> WITH THE WORLD'S</h1>
          <br/>
          <p>The Marvel Comics API allows developers everywhere to access information about Marvel's vast library of comics—from what's coming up, to 70 years ago.
            </p>
            <Button className="btn1">Order Now</Button> 
          </Col>
          <Col md={6} className="custom_img_place">
              <Card className="brd1">
                <Card.Img src={home_img} />
              </Card>
          </Col>
      </Row>

    </Row> 
    </Container>                                    
       </div>

   
    
  <div className="part2">
         <Container>
          <div class="col-12 m-3 text-center ">
              <h1>Choose from your favourite Comic Book</h1>
          </div>         
            <TabsOfCat />
         </Container>
 </div>
 

 <div className="part3">
         <Container>
            <div class="col-12 m-3 text-center">
                <h1 className="text-white">Characters you love!</h1>
            </div>
            <Products/>
          </Container>
 </div>

 <div className="part4">
         <Container>
         <div class="col-12 text-center p-5">
            <h3>Best Comic around the world</h3>
         </div>
        <Row className="justify-content-center">
       <Col md={12}>


       <Row className="justify-content-center align-items-center">
         <Col xs={12} md={5}>
              
                <img className="photo2 img-fluid" src={people} />
      
              </Col>
  <Col xs={12} md={6} >
    <Card>       
      <Card.Body className="opinion">
        <h4>Why Choose Us?</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies nam dui mattis placerat fusce gravida diam fermentum. Sit sodales adipiscing rhoncus cras quam vel nam. 
        Curabitur pellentesque vitae amet, massa venenatis neque, netus nunc. Sapien vitae dolor quis quam neque facilisi sagittis, malesuada fermentum.
        </p>
      </Card.Body>
    </Card>
  </Col>
  


</Row>
</Col>

</Row>
        


      </Container>

    </div>
  </div>
  	

  );

  
}


export default Home;