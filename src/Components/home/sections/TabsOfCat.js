import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

import './Slider.css';

import './TabsOfCat.css';


import Products from './Products.js';

import StarRating from './StarRating';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faClock } from '@fortawesome/free-solid-svg-icons';


import p1 from './slider_img/1.png'
import p2 from './slider_img/2.png'
import p3 from './slider_img/3.png'
import p4 from './slider_img/4.png'
import p5 from './slider_img/5.png'
import p6 from './slider_img/6.png'
import p7 from './slider_img/7.png'
import p8 from './slider_img/8.png'
import p9 from './slider_img/9.png'
import p10 from './slider_img/10.png'


import All from './All.js'
import Pizza from './Pizza.js'
import Burger from './Burger.js'

function TabsOfCat() {
  const [key, setKey] = useState('all');

  return (

    <Container>
                 <All/>
    </Container>
  );
}

export default TabsOfCat;