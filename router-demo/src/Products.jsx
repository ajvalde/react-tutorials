import React from 'react';
import { Link, Route } from 'react-router-dom';




const Products = ({ match }) => {

    const Product = ({match,data}) => {
        var product= data.find(p => p.id == match.params.productId);
        var productData;
      
        if(product)
          productData = <div>
            <h3> {product.name} </h3>
            <p>{product.description}</p>
            <hr/>
            <h4>{product.status}</h4>  </div>;
        else
          productData = <h2> Sorry. Product doesnt exist </h2>;
      
        return (
          <div>
            <div>
               {productData}
            </div>
          </div>
        )    
      }

    const productsData = [
        {
          id: 1,
          name: 'NIKE Liteforce Blue Sneakers',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
          status: 'Available'
        
        },
        {
          id: 2,
          name: 'Stylised Flip Flops and Slippers',
          description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
          status: 'Out of Stock'
        
        },
        {
          id: 3,
          name: 'ADIDAS Adispree Running Shoes',
          description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
          status: 'Available'
        },
        {
          id: 4,
          name: 'ADIDAS Mid Sneakers',
          description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
          status: 'Out of Stock'
        },
        
        ];


   var linkList = productsData.map( (product) => {
     return(
       <li>
         <Link to={`${match.url}/${product.id}`}>
           {product.name}
         </Link>
       </li>
       )
 
     })
 
   return(
     <div>
         <div>
          <div>
            <h3> Products</h3>
            <ul> {linkList} </ul>
          </div>
         </div>
 
         <Route path={`${match.url}/:productId`}
             render={ (props) => <Products data= {productsData} {...props} />}/>
         <Route exact path={match.url}
             render={() => (
             <div>Please select a product.</div>
             )}
         />
     </div>
   )
 }

export default Products;