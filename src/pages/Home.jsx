import Navbar from '../components/Navbar';
import Cartproducts from '../components/Cartproducts';
import Productsdata from '../Productsdata';
import { useState} from 'react';


const Home = () => {
  const [products, setProducts] = useState(Productsdata);

  return (
    <div>
      <Navbar/>
      <div className='container mt-5'>
        <h2 className='title text-center'>Our Products</h2>
      <div className='products-card'>
      {products.map((product, index) => (
            <Cartproducts
              key={index} 
              id={product.id}
              productsImg={product.productsImg}
              title={product.title}
              amount={product.amount}
              // addToCart={addToCart}
            />
          ))}
      </div>
      </div>
      
    </div>
  )
}

export default Home