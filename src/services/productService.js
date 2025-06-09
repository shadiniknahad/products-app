import { PRODUCTS_API } from "@/constants/api";

export async function fetchProducts() {
  const response = await fetch(PRODUCTS_API);
  
  if (!response.ok) throw new Error("خطا در ارتباط با سرور");

  const data = await response.json();
  if (!data.products?.length) throw new Error("محصولی یافت نشد");

  return data.products;
}