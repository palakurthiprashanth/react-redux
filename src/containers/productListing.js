import { useSelector } from 'react-redux';

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts);
  return (
    <div>
      <h1>Product Listing.</h1>
      {products}
    </div>
  );
};
export default ProductListing;
