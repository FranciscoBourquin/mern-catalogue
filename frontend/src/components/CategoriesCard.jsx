import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

export const CategoriesCard = () => {
  const { products } = useProducts();

  const uniqueCategories = products.reduce((acc, product) => {
    if (!acc.some((p) => p.category === product.category)) {
      acc.push(product);
    }
    return acc;
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {uniqueCategories.map((item) => (
        <Link
          key={item.category}
          to={`/productos/${item.category}`}
          className="p-4 border rounded shadow hover:shadow-lg transition"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-contain mb-3"
          />
          <h2 className="text-center font-semibold text-lg uppercase">
            {item.category}
          </h2>
        </Link>
      ))}
    </div>
  );
};
