import React, { useEffect, useState } from 'react'
import './Newcollections.css'
import new_collection from '../Assets/new_collections'
import Card from '../Card/Card'
import axios from 'axios'


const Newcollections = () => {
  const[products, setProducts]=useState([])
  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/products/`) // to render data from database we use method get
    .then(res=>{
      console.log('Data from API:', res.data); // Log the response data
      setProducts(res.data)
      
    })
    .catch(err=>console.log(err))
  }, [])
  
  return (
    <>
    <div className="new-collections">
    <h1>New Collections</h1>
    <hr />
    <div className="collections">
        {/* {new_collection.map((item, i)=>{
              return <Card key ={i} id={item.id} name = {item.name} image= {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
        })} */}
       {products.map((item,i)=>{
          console.log("Product item:", item); // Check if item has the expected data
          return <Card data={item} key={i} />;

       }
            
          
            
                )}

    </div>
    </div>
    </>
  )
}

export default Newcollections