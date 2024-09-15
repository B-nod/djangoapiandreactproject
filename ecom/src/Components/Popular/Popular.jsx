import React from 'react'
import data_product from '../Assets/data'
import './popular.css'
import Card from '../Card/Card'

const Popular = () => {
  return (
    <>
    <div className="popular">
    <h1>Popular In Women</h1>
    <hr/>
    <div className="popular-item">
        {data_product.map((item,i)=>{
            return <Card key ={i} id={item.id} name = {item.name} image= {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
// note yaha bata sabai data card ma props ko rupma janxa hai 
        })}
    </div>
    </div>
    </>
  )
}

export default Popular