import React from "react";
import { useParams } from "react-router-dom";
import { products } from "./ProductDetails";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="p-8 text-center">Product not found.</div>;
  } 

  return (
    <div className="max-w-3xl mx-auto p-8">
      <img src={product.image} alt={product.title} className="w-full h-80 object-cover rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-600 mb-2">{product.location}</p>
      <div className="flex gap-6 mb-4">
        <span className="text-xl font-semibold text-green-700">${product.price}</span>
        <span className="text-lg text-blue-600">Rent: ${product.rentPrice}</span>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <img src={product.owner.avatar} alt={product.owner.name} className="w-10 h-10 rounded-full" />
        <span className="font-medium">{product.owner.name}</span>
      </div>
    </div>
  );
}
