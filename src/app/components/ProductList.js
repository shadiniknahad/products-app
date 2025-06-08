"use client";

import Link from "next/link";
import { getRatingColor } from "@/utils/getRatingColor";
import { useProducts } from "@/hooks/useProducts";

export default function ProductList() {
  const { products, loading, error } = useProducts(); 

  if (loading) return <p className="p-8">در حال دریافت محصولات...</p>;
  if (error) return <p className="p-8 text-red-500">خطا: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products?.map(({ id, title, rating }) => (
        <div
          key={id}
          className="border rounded-lg p-4 shadow hover:shadow-md transition bg-white dark:bg-gray-900 flex flex-col"
        >
          <Link
            href={`/product/${id}`}
            className="font-semibold text-lg hover:underline mb-2"
          >
            {title}
          </Link>
          <span className={`text-xl ${getRatingColor(rating)}`}>★</span>
          <span className="text-sm text-gray-600 mt-auto">امتیاز: {rating}</span>
        </div>
      ))}
    </div>
  );
}
