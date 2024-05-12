import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Productdet() {
  const id = useParams().productId
  const api_url = `https://fakestoreapi.com/products/${id}`;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json()) // Call json() method to parse response
      .then((data) => setProducts(data) )
      .catch((error) => console.error("Error fetching products:", error));
  },[]);

  return <>this is product :{products.description}</>;
}
export default Productdet;
