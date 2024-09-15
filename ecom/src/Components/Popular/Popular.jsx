import React,{useState, useEffect} from 'react'
import data_product from '../Assets/data'
import './popular.css'
import Card from '../Card/Card'
import axios from 'axios'

const Popular = () => {
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
    <div className="popular">
    <h1>Popular In Women</h1>
    <hr/>
    <div class="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
   
    </div>
    </>
  )
}

export default Popular