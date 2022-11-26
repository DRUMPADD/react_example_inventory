import {React, useState, useEffect} from "react";
import { getProducts } from "../api/product.api";
import ProductsCard from "../components/ProductsCard";
function StucksPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const showProducts = async () => {
      const response = await getProducts();
      setProducts(response.data);
    }

    showProducts();
  }, [])

  return (
    <div className="container m-auto">
      <h1 className="text-white font-bold text-6xl mb-6 text-center">Products</h1>
      <div className="grid grid-cols-4 gap-2">
      {products.map(p => (
            <ProductsCard product={p} key={p.id} />
          )
        )
      }
      </div>
    </div>
  );
}

export default StucksPage;
