import React from "react"
import ButtonComp from "../common/Button"

export default function ProductCard({
  image,
  title,
  description,
  price,
  onAddToCart,
  buttonText = "Add to Cart"
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 flex-1 mb-4">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-green-600">${price}</span>
          <ButtonComp
            text={buttonText}
            textColor="text-white"
            bgColor="bg-blue-600 hover:bg-blue-700"
            onClick={onAddToCart}
            className="ml-2"
          />
        </div>
      </div>
    </div>
  )
}