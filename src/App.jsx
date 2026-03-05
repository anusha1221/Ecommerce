import React from 'react'
import './App.css'
import ProductCard from './ProductCard'
import ProductCardWithJSX from './ProductCardWithJSX'
import Home from './Home'
import DropdownEvent from './DropdownEvent'
import CheckboxEvent from './CheckboxEvent'
import FoodMenu from './FoodMenu'
import ConditionalRendering, { ConditionalRendering1 } from './ConditionalRendering'
import StyleGrid from './StyleGrid'
import DarkLightMode from './DarkLightMode'
import Country from './Country'
import StarRating from './StarRating'
import Accordian from './Accordian'
import Parent from './Parent'
import ParentLikeDislike from './ParentLikeDislike'
import UseEffect from './UseEffect'
import ScrollToSection from './ScrollToTopExample'
import FileUpload from './FileUpload'
import CartBilling from './useReducer'
function App() {

  return (
    <>
      <ProductCard />
      <ProductCardWithJSX />
      <Home />
      <DropdownEvent />
      <CheckboxEvent />
      <FoodMenu />
      <ConditionalRendering />
      <ConditionalRendering1 />
      <StyleGrid />
      <DarkLightMode />
      <Country />
      <StarRating />
      <Accordian />
      <Parent />
      <ParentLikeDislike />
      <UseEffect />
      <ScrollToSection />
      <FileUpload />
      <CartBilling />
      
    </>
  )
}

export default App
