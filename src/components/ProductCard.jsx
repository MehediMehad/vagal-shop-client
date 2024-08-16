
const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.category}</p>
        <p className="text-gray-700 text-base">{product.brand}</p>
      </div>
      <div className="px-6 pt-2 pb-2">
        <span className="text-gray-900 font-bold text-lg">${product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
