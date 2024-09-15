import React, {useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';


const Products = () => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  
  // useParams is used to retrieve productId from the URL kinaki hamile route ma url ma nai productId declare gareko xau so
  // url bata ako product id lai productId le store grxa 

  const product = all_product.find((item)=> item.id === Number(productId));
  // url bata ako productId ra all_product bata ako id check garxa if equal xa vane ani return garxa tala deko format ma tyo pani jun product ko duitai value equal xa teslai mara dekhauxa
  return (
    <>
    <Breadcrumbs product = {product} />
    <ProductDisplay product = {product} />

    </>

// The line <Breadcrumbs product={product} /> is passing a product object as a product prop to the Breadcrumbs component. so uta breadcrumb ma product name le matra access grna milxa props lai
  )
}

export default Products