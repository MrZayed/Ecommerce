import { Link } from "react-router-dom";

function Product(props) {
  const {product} = props;
  return (
    <>
      <div class="card" style={{ height: "550px", paddingBlock :"5px", paddingInline:"5px" , marginBlock :"5px"}}>
        <img src={product.image} style={{ height: "400px", paddingBlock :"5px", paddingInline:"5px" , marginBlock :"5px"}} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{product.title}</h5>
          <Link class="btn btn-primary" to = {`/product/${product.id}`} >
            details
          </Link>
        </div>
      </div>
    </>
  );
}
export default Product;
