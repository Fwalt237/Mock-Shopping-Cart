import {createContext, useContext, useState, type ReactNode} from 'react';
import type { CartItem, Product } from '../types';

interface CartContextType{
    cart: CartItem[];
    addToCart: (product:Product, quantity:number) => void;
    updateQuantity: (productId: number, quantity:number) => void;
    removeFromCart: (productId: number) => void;
    getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider ({children}:{children: ReactNode}) {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product:Product, quantity:number) =>{
        if(quantity <=0) return;

        setCart((prev) =>{ 
            const existing = prev.find((item) =>item.product.id==product.id);

            if(existing){
                return prev.map((item)=>
                    item.product.id==product.id ?
                    {...item, quantity: item.quantity + quantity} :
                    item
                );
            }
            return [...prev,{product,quantity}];
        });
    };

    const updateQuantity = (productId: number, quantity:number) => {
        if(quantity<=0){
            removeFromCart(productId);
            return;
        }
        setCart((prev)=>
            prev.map((item)=>
                item.product.id ==productId?{...item,quantity:quantity}:item
                    )
                );
    };

    const removeFromCart = (productId: number) => {
        setCart((prev)=>prev.filter((item)=>item.product.id!==productId));
    };

    const getTotalItems = () => {
        return cart.reduce((sum,item)=>sum+item.quantity,0);
    };

    return (
        <CartContext.Provider
            value={{cart,addToCart, updateQuantity,removeFromCart,getTotalItems}}
        >
            {children}
        </CartContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
    const context = useContext(CartContext);
    if(!context) throw new Error('useCart must be used within CartProvider');
    return context;
}

