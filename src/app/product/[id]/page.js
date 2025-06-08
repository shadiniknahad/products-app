"use client";

import { useParams } from "next/navigation";
import { useProducts } from "@/hooks/useProducts";
import { getRatingColor } from "@/utils/getRatingColor";

export default function ProductPage() {
  const params = useParams();
  const { products, loading, error } = useProducts();

  const product = products.find(p => p.id === Number(params.id));

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا: {error}</p>;
  if (!product) return <p>محصول پیدا نشد</p>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        <span className={`text-xl ${getRatingColor(product.rating)}`}>★</span>
        {product.title}
      </h1>
      <p>امتیاز: {product.rating}</p>
      <p>قیمت: ${product.price}</p>
      <p>درصد تخفیف: {product.discountPercentage}%</p>
      <p>موجودی: {product.stock}</p>
    </div>
  );
}
