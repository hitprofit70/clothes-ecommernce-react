import Navbar from '../components/Navbar';
import Cartproducts from '../components/Cartproducts';
import Productsdata from '../Productsdata';
import { useState} from 'react';
import Playvideo from '../components/Playvideo';
import Footer from '../components/Footer';


const Home = () => {
  const [products, setProducts] = useState(Productsdata);

  return (
    <div>
      <Navbar/>
      <Playvideo/>
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
      <Footer/>
    </div>
  )
}

export default Home