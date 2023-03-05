import React from 'react';


import './about.css';

import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function About() {

  return (
  	 <div className="part11">
         <Container>

        
         
     <div class="col-12 text-center">
            <h3>About Us</h3>

        </div>

        <Row className="justify-content-center mt-7">
       <Col md={6}>
       <Row>
 
        <Card className="text-center p-3 mt-4">
      <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies nam dui mattis placerat fusce gravida diam fermentum. Sit sodales adipiscing rhoncus cras quam vel nam. 
Curabitur pellentesque vitae amet, massa venenatis neque, netus nunc. Sapien vitae dolor quis quam neque facilisi sagittis, malesuada fermentum.</Card.Body>
    </Card>
  


</Row>
</Col>

</Row>
        

          
          

      

             </Container>

 </div>





 
    
   

  );

  
}


export default About;