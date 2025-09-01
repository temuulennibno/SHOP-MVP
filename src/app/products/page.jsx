import React from "react";

export default async function App() {
  const response = await fetch("https://dummyjson.com/products");
  const { products } = await response.json();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">MyShop</h1>
        <div className="relative">
          <button className="text-gray-600 hover:text-gray-800">🛒 Cart</button>
        </div>
      </header>

      {/* Product List */}
      <main className="p-6 max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <a href={`/products/${product.id}`} className="bg-white shadow rounded p-4" key={product.id}>
              <img src={product.thumbnail} alt="Product" className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-lg font-medium text-gray-800 line-clamp-1">{product.title}</h3>
              <p className="text-blue-600 font-bold mt-2">${product.price}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add to Cart</button>
            </a>
          ))}

          {/* Add more static cards here if needed */}
        </div>
        {/* <div className="flex w-full justify-center">
          <a href="/products" className="mt-4 w-full bg-blue-600 block text-center text-white py-2 rounded hover:bg-blue-700">
            All products
          </a>
        </div> */}
      </main>
    </div>
  );
}
