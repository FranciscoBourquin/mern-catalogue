import { useProducts } from "../context/ProductContext";
import { ProductCard } from "../components/ProductCard";

export const Laptops = () => {
  const { products } = useProducts();
  const laptopProducts = products.filter((p) => p.category === "laptops");

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {laptopProducts.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};
