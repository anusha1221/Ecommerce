import React from 'react'
import './App.css'
import ProductCard from './ProductCard'
import ProductCardWithJSX from './ProductCardWithJSX'
import Home from './Home'
import DropdownEvent from './DropdownEvent'

function App() {

  return (
    <>
      <ProductCard />
      <ProductCardWithJSX />
      <Home />
      <DropdownEvent />
    </>
  )
}

export default App
