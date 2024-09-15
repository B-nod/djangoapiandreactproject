import React from 'react'
import './item.css'

const Items = (props) => {
  return (
    <>
    <div className="item shadow-lg">
        <img src={props.image} alt="" srcset="" />
        <h2>{props.name}</h2>
        <div className="item-prices">
            <div className="item-price-new">
                {props.new_price}
            </div>

            <div className="item-price-old">
                {props.old_price}
            </div>
        </div>
    </div>
    </>
  )
}

export default Items