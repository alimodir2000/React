import { useParams } from "react-router-dom";
export default function ProductDetailPage() {
    const params = useParams();
    const productId = params.productId;
  return <h1>Product Details {productId}</h1>;
}
