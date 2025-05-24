import React from 'react'
import ProductGrid from '../components/products/ProductGrid'
import { products } from '../components/products/ProductDetails'

const Rentals = () => {
  return (
    <div>
        <ProductGrid products={products} />
    </div>
  )
}

export default Rentals
