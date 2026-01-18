export default function Home() {
    return (
        <div className="max-w-6xl mx-auto p-8 text-center">
            <h2 className="text-4xl font-bold mb-8">Welcome to MyStore!</h2>
            <p className="text-xl mb-12">Browse our amazing products and add them to your cart.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <img
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=300&fit=crop"
                    alt="Shopping"
                    className="rounded-lg shadow-lg" 
                />
                 <img
                    src="https://picsum.photos/seed/tech/400/300"
                    alt="Ecommerce"
                    className="rounded-lg shadow-lg w-full object-cover" 
                />
                <img
                    src="https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop"
                    alt="Cart"
                    className="rounded-lg shadow-lg" 
                />
            </div>
        </div>
    );
}