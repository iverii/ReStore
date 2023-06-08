import { Product } from "../../app/models/products"
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

// interface Props{
//     products: Product[];
//     addProduct: () => void;

// }


export default function Catalog(){

    const [products, setProducts] = useState<Product[]>([]);

    //In This function empty array is importent, without it product will be endless
    useEffect(() => {
      fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
    }, [])
  
    // function addProduct(){
    //   setProducts(prevState =>  [...prevState,
    //     {
    //       id: prevState.length + 101,
    //       name: 'product' + (prevState.length + 1),
    //       price: 300,
    //       brand: 'some brand',
    //       description: 'descriptoon',
    //       pictureUrl: 'http://picsum.photos/200'
    //       // type: 'some type',
    //       // quantityInStock: 15
        
    //     }])
    // }

    return(
        <>
            <ProductList products = {products}/>
            {/* <Button variant="contained" onClick={addProduct}>Add Product</Button> */}
        </>
    )

}