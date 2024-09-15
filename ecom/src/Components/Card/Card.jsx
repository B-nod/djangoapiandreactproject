import React, { useEffect, useState } from 'react';
import './Card.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Card = (props) => {
  console.log("Card data:", props.data);

  const{image,name,old_price,new_price,id} = props.data || {};



  return (
    <>
     <div className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg card-image" src={image} alt={name} />
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <div className="price">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${new_price}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${old_price}</p>
        </div>
      </div>
    </div>
 



    </>
   
  );
};

export default Card;
