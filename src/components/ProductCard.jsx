const ProductCard = ({ product }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-32 object-contain" src={product.image} alt={product.name} />
      <div className="px-4 py-2">
        <div className="font-bold text-lg mb-1">{product.name}</div>
        <p className="text-gray-700 text-sm"><span className="font-bold">Category:</span> {product.category}</p>
        <p className="text-gray-700 text-sm"><span className="font-bold">Brand:</span> {product.brand}</p>
      </div>
      <div className="px-4 pt-2 pb-2">
        <span className="text-gray-900 font-bold text-base"><span className="font-bold">Price:</span> ${product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;