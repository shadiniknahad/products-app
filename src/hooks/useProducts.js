import { useEffect, useState, useCallback } from "react";
import { loadFromCache, saveToCache } from "@/utils/storage";
import { fetchProducts as fetchProductsFromAPI } from "@/services/productService";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const products = await fetchProductsFromAPI();
      setProducts(products);
      saveToCache("products", products);
    } catch (err) {
      console.error("fetch error:", err);
      setError(err.message || "خطای نامشخص");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const cached = loadFromCache("products");
    if (cached) {
      setProducts(cached);
      setLoading(false);
    } else {
      fetchData();
    }
  }, [fetchData]);

  return { products, loading, error };
}
