import products from "./products.json";
import "./App.css";
import Product from "./component/product";
import Cart from "./component/cart";

function App() {
  return (
    <div className="App">
      <Cart />
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;