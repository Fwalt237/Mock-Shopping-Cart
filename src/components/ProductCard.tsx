import {useState} from 'react';
import type { Product } from '../types';
import {useCart} from '../context/CartContext';

interface Props{
    product: Product;
}

export default function ProductCard({product}: Props) {
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useCart();

    const handleAdd = () => {
        addToCart(product,quantity);
        setQuantity(1);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h3>
            <p className="text-xl font-bold mb-4">${product.price}</p>

            <div className="flex items-center gap-2 mb-4">
                <button 
                    onClick={() => setQuantity(Math.max(1,quantity -1))}
                    className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded"
                >
                    -
                </button>
                <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange = {(e)=>setQuantity(Math.max(1,parseInt(e.target.value)|| 1))}
                    className="w-16 text-center border rounded px-2 py-1"
                />
                <button 
                    onClick={() => setQuantity(quantity +1)}
                    className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded"
                >
                    +
                </button>
            </div>
            <button 
                onClick={handleAdd}
                className="mt-auto bg-gray-600 hover:bg-gray-700 text-white py-2 rounded"
            >
                Add to Cart
            </button>
        </div>
    );
}

