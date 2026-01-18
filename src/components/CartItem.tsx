import type {CartItem as CartItemType} from '../types';
import {useCart} from '../context/CartContext'

interface Props {
    item: CartItemType;
}

export default function CartItem({item}:Props){
    const {updateQuantity, removeFromCart} = useCart();

    return (
        <div className="flex items-center gap-4 bg-white p-4 rounded shadow">
            <img 
                src={item.product.image}
                alt={item.product.title}
                className="w-24 h-24 object-contain"
            />
            <div className="flex-1">
                <h3 className="font-semibold">{item.product.title}</h3>
                <p className="text-grey-600">${item.product.price}</p>
            </div>
            <div className="flex items-center gap-2">
                <button 
                    onClick={()=>updateQuantity(item.product.id, item.quantity-1)}
                    className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded"
                >
                    -
                </button>
                <span className="w-12 text-center">{item.quantity}</span>
                <button 
                    onClick={()=>updateQuantity(item.product.id, item.quantity+1)}
                    className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded"
                >
                    +
                </button>
            </div>
            <p className="font-bold w-24 text-right">${(item.product.price*item.quantity).toFixed(2)}</p>
            <button 
                    onClick={()=>removeFromCart(item.product.id)}
                    className="text-red-600 hover:text-red-800"
                >
                    Remove
                </button>
        </div>
    );
}