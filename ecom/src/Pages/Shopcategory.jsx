import React, { useContext } from 'react'
import './Css/Shopcategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Card from '../Components/Card/Card'

// In React, props stands for "properties" and is used to pass data from one component to another, specifically from a parent component to a child component

const Shopcategory = (props) => {
const {all_product} = useContext(ShopContext);


  return (
    <>
    <div className="shop-category">
    <img src={props.banner} alt="" className='shopcategory-banner' />
    <div className="shopcategory-indexsort">
      <p>
        <span>Showing 1-12</span>Out of 36 Products
      </p>
      <div className="shopcategory-sort">
        <span>Sort By</span>
        <img src={dropdown_icon} alt="" />
      </div>
    </div>
    <div className="shopcategory-products">
      {all_product.map((item, i)=>{
       
        if(props.category===item.category){
          return <Card key ={i} id={item.id} name = {item.name} image= {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
          
        }
// mathy ko function le chai all_product lai map garera if route ma shopcategory ma route ma pathako category vanne props ra allproduct ma vako pratayak item ko category mileko lai matra card ko format ma display garxa 

// ra Productdetails.map(item, i) chai kin gareko vanda item le all_product ma vako harek array item lai access garxa ra i le array index dinxa jsle garda kun product change vo add vo or remove vo vanera identify garna sajilo hunxa

// i is used to set a unique key for each Card component, jsle garda hamile kunai pani specific product ya card lai add remove delete ra aru kam garna sakinxa  for eg: for(i==0; i<=7; i++){}

        else{
          return null;
        }
      })}
    </div>
    </div>
    </>
  )
}

export default Shopcategory