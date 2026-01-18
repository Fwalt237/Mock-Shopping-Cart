import {useCart} from '../context/CartContext';
import CartItem from '../components/CartItem';


export default function Cart(){
    const {cart} = useCart();

    const totalPrice = cart.reduce((sum: number,item: { product: { price: number; }; quantity: number; })=> sum + item.product.price*item.quantity,0);

    if(cart.length ===0){
        return(
            <div className="max-w-4xl mx-auto p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
                <p>Go to the shop and add some items!</p>
            </div>
        );
    }

    return(
        <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
            <div className="space-y-4">
                {cart.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                ))}
            </div>
            <div className="mt-8 text-right text-2xl font-bold">
                Total: ${totalPrice.toFixed(2)}
            </div>
        </div>
    );

}