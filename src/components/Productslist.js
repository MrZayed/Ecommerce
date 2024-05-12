import { useEffect, useState } from "react";
import Product from "./Product";

function Productslist() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json()) // Call json() method to parse response
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  console.log("products:", products);

  return (
    <>
      <h1 className="text-center" >Our Products</h1>
      <div className="container" style={{ height: "300px", paddingBlock :"5px", paddingInline:"5px" , marginBlock :"5px"}}>
        <div className="row">
          {products.map((product) => (
            <div className="col-3" key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Productslist;
