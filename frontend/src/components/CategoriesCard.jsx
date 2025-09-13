import { products } from "../mocks/products"

export const CategoriesCard = () => {

  const uniqueCategories = products.reduce((acc, product) => {
    if (!acc.some(p => p.category === product.category)) {
      acc.push(product);
    }
    return acc;
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {uniqueCategories.map((item) => (
        <div
          key={item.category}
          className="p-4 border rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-40 object-contain mb-3"
          />
          <h2 className="text-center font-semibold text-lg uppercase">
            {item.category}
          </h2>
        </div>
      ))}
    </div>
  );
}
