import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import EmptyState from "../components/EmptyState";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("/api/products");

        if (!res.ok) {
          throw new Error("Gagal mengambil data produk");
        }

        const data = await res.json();
        setProducts(data);

      } catch (error) {
        setError(error.message);
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
      ) : error ? (

        /* ERROR STATE */
        <div className="col-span-full">
          <EmptyState
            title="Terjadi Kesalahan"
            description={error}
            actionText="Coba Lagi"
            onAction={() => window.location.reload()}
            icon="⚠️"
          />
        </div>

      ) : products.length === 0 ? (

        /* EMPTY STATE */
        <div className="col-span-full">
          <EmptyState
            title="Belum ada produk"
            description="Produk akan segera tersedia"
            icon="📦"
          />
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