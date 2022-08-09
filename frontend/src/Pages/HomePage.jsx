import "../Styles/HomePage.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getProducts } from "../Redux/App/product/productAction";

// Components
import Product from "../Components/Product";

const HomePage = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const { products, isLoading, error } = allProducts;
  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts());
    }
  }, [products.length, dispatch]);

  return (
    <div className="homepage">
      <h2 className="homepage__title">Latest Products</h2>
      <div className="homepage__products">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
              rating={product.rating}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;