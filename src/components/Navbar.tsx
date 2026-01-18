import {NavLink} from 'react-router-dom';
import {useCart} from '../context/CartContext';

export default function Navbar() {
    const {getTotalItems} = useCart();
    const totalItems = getTotalItems();

    return (
        <nav className="bg-gray-600 text-white p-4 shadow-lg">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">MyStore</h1>
                <div className="space-x-8 text-lg">
                    <NavLink
                        to="/"
                        className={({isActive}) =>
                            isActive ? 'underline font-semibold':''
                    }>
                        Home
                    </NavLink>
                    <NavLink
                        to="/shop"
                        className={({isActive}) =>
                            isActive ? 'underline font-semibold':''
                    }>
                        Shop
                    </NavLink>
                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            `relative inline-block ${isActive ? 'underline font-semibold' : ''}`
                        }
                        >
                        Cart
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-4 bg-red-500 text-white rounded-full px-1.5 py-0.5 text-[10px] min-w-[18px] h-[18px] flex items-center justify-center">
                            {totalItems}
                            </span>
                        )}
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}