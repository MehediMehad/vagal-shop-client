
const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"><span className="font-bold"></span> {product.name}</div>
        <p className="text-gray-700 text-base"><span className="font-bold">Category:</span> {product.category}</p>
        <p className="text-gray-700 text-base"><span className="font-bold">Brand:</span> {product.brand}</p>
      </div>
      <div className="px-6 pt-2 pb-2">
        <span className="text-gray-900 font-bold text-lg"><span className="font-bold">Price:</span> ${product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
