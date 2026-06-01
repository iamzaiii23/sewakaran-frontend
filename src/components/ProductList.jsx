import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import EmptyState from "../components/EmptyState";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

      {/* LOADING */}
      {loading ? (
        Array(6).fill(0).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))
      ) : products.length === 0 ? (

        /* EMPTY STATE */
        <div className="col-span-full">
          <EmptyState />
        </div>

      ) : (

        /* DATA */
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))

      )}

    </div>
  );
}

export default ProductList;