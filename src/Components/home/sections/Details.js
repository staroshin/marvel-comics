import React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';
import './FoodDetails.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Details() {

     const [item, setItems] = useState([]);
     const params = useParams();
     const api = `https://gateway.marvel.com:443/v1/public/comics/${params.id}?ts=1&apikey=637fb781eb2a3ab8dea7488ffd4a826d&hash=4b650fb2fee0eef8312076da5c9c57f2`;
     const [url, setUrl] = useState(api);

     useEffect(() => {
          const fetch = async () => {
             const res =await axios.get(url);
             setItems(res.data.data.results);
          //    console.log(JSON.stringify(item));
             console.log(item);
          }
          fetch();   
         }, [url])

       

  return (

   <>
     <Container>
               {item.map(items => ( 
               <Row>
                    <Col md="6">
                         <img  className='img-fluid p4' src={items.thumbnail.path + "." + items.thumbnail.extension } />
                    </Col>
                    <Col md="6">
                         <div className='p-4'>
                              <p>{items.id}</p>
                              <h1>{items.title}</h1>
                             
                         </div>
                         <div className='p-4'>

                              <p>Creator details:</p>
                              <a href={`/authDetails/${items.creators.collectionURI}`}><h4>{items.creators.items[0].name} <i className='text-primary'>{items.creators.items[0].role}</i></h4></a>
                              
                         </div>
                    </Col>
               </Row>
                     ))}

                        
      

        
          
         


      </Container>


    </>
 
    
   

  );

  
}


export default Details;