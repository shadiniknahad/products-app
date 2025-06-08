import ProductList from "@/app/components/ProductList";

export default function HomePage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">لیست محصولات</h1>
      <ProductList />
    </div>
  );
}
