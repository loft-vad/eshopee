import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const ProductList: React.FC = () => {
  const { page, error, limit, loading, products } = useTypedSelector(
    (state) => state.product
  );
  const { fetchProducts, setProductPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchProducts(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {product.id} - {product.title}
        </div>
      ))}
      <div style={{ display: "flex" }}>
        {pages.map((pageItem) => (
          <div
            key={pageItem}
            onClick={() => setProductPage(pageItem)}
            style={{
              border: pageItem === page ? "2px solid green" : "1px solid gray",
            }}
          >
            {pageItem}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
