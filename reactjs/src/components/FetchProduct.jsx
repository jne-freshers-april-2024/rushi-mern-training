import { useEffect, useState } from "react";
import axios from "axios";
import "./FetchProduct.css";

const FetchProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoading,setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=100"
        );

        setProducts(response.data.products);
        setLoading(false)
      } catch (error) {
        // setErrors(error);
        console.log(error)
      }
    };
    fetchData();
  }, []);

  return (
    <div>
        { isLoading ? (
            <h1>Loading ....</h1>
        ) : (
            <>
            <h1 className="product-list">Products :</h1>
            <ul>
                {products.map((product) => (
                <div className="product-item" key={product.id}>
                    <li>Id: {product.id}</li>
                    <li>Title: {product.title}</li>
                    <li>Brand: {product.brand}</li>
                    <li>Price: {product.price}</li>
                    <li>Rating: {product.rating}</li>
                </div>
                ))}
            </ul>
            </>
        )}
    </div>
);

};

export default FetchProduct;








