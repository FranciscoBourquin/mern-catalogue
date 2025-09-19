export const ProductCard = ({ product }) => {
  return (
    <div className="p-4 border rounded shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain mb-3"
      />
      <h2 className="text-center font-semibold text-lg">{product.name}</h2>
      <p className="text-center text-gray-600">${product.price}</p>
    </div>
  );
};
