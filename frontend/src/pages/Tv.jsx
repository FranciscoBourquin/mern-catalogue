import { useProducts } from "../context/ProductContext";
import { ProductCard } from "../components/ProductCard";

export const Tv = () => {
  const { products } = useProducts();
  const tvProducts = products.filter((p) => p.category === "televisores");

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {tvProducts.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};
