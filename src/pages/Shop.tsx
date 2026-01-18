import {useEffect, useState} from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types';

export default function Shop(){
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios
            .get('https://fakestoreapi.com/products')
            .then((res)=>{
                setProducts(res.data);
                setLoading(false);
            })
            .catch((err)=>{
                console.error(err);
                setLoading(false);
            });
    },[]);

    if (loading) return <div className="text-center py-20">Loading products...</div>;

    return (
        <div className="max-w-6xl mx-auto p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product) =>
                    (<ProductCard key={product.id} product={product}/>)
                    )}
            </div>
        </div>
    );
}