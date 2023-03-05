import React from 'react';











import Image from 'react-bootstrap/Image'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { faFacebookF,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';









import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import './footer.css';

function Footer() {
   return (

 <div className="part9">

<Container>

         <Row className="justify-content-center">

          <Row className="mt-5 mb-5">


        <Col xs={12} md={6} className="text-center">
       
        

           <div className="mt-3 icn_items">
            
              
                <FontAwesomeIcon icon={faFacebookF} size="lg" className="m-1"  ></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter} size="lg"  className="m-1"></FontAwesomeIcon>
               <FontAwesomeIcon icon={faInstagram} size="lg"  className="m-1"></FontAwesomeIcon>
 
          </div>
          <p>Copyright © 2023</p>
          
           

        </Col>

        <Col xs={12} md={2}>
         <h6>Company</h6>

         <div className="mt-3 list_itm">
          <p>About us</p>
          <p>Blog</p>
          <p>Contact us</p>
          <p>Pricing</p>
             <p>Testimonials</p>
 
          </div>

        </Col>

        <Col xs={12} md={2}>
          <h6>Support</h6>

         <div className="mt-3 list_itm">
          <p>Help center</p>
          <p>Legal</p>
          <p>Privacy policy</p>
          <p>Status</p>
       
 
          </div>
        </Col>

        <Col xs={12} md={2}>
          <h6>Contact information</h6>
          <p className="foot_text" style={{fontSize:"12px"}}>3181 Al Imam Saud Ibn Abdul Aziz Branch Rd,An Nuzhah, Riyadh 12474, Saudi Arabia</p>
        
         </Col>

       


        </Row>
         </Row>


</Container>
</div>
    
  );
}

export default Footer;