import React from 'react';
import './App.css';
import Home from'./Components/home/home.js';
import Comics from'./Components/comics.js';
import About from'./Components/about/about.js';
import Header from './Components/header/Header.js'
import Welcome from './Components/Welcome.js'
import Offers from './Components/Offers.js'
import Restaurant from './Components/Restaurants.js'
import Series from './Components/Series.js'
import AuthDetails from './Components/home/sections/AuthDetails.js'
import Rewards from './Components/Rewards.js'
import Details from './Components/home/sections/Details.js'
import Footer from './Components/footer/Footer.js'

import 'bootstrap/dist/css/bootstrap.min.css';

import image from "./img/fp_logo.png";

import { 
    BrowserRouter as Router, 
    Route, 
    Routes,
    Link
} from 'react-router-dom';



function App() {
  return (

  <Router> 

        
          <Header image={image}/>
     
          
          
           <Routes>            
            <Route exact path="/" element={<Home/>}/>
            <Route path="/comics" element={<Comics />}/>
            <Route path="/offers" element={<Offers />}/>
            <Route path="/restaurant" element={<Restaurant />}/>
            <Route path="/series" element={<Series />}/>
            <Route path="/reward" element={<Rewards />}/>
            <Route path="/about" element={<About/>}/>  
             <Route path="/details/:id" element={<Details/>}/>       
             <Route path="/authDetails/:id" element={<AuthDetails/>}/>       
           </Routes>



          <Footer />

          
          <Welcome name="<Marvel Movies>."/>

  </Router> 

    

  );
}

export default App;
