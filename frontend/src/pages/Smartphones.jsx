import { useProducts } from "../context/ProductContext";
import { ProductCard } from "../components/ProductCard";

export const Smartphones = () => {
  const { products } = useProducts();
  const smartphoneProducts = products.filter((p) => p.category === "smartphones");

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {smartphoneProducts.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};
