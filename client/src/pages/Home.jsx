import React, { useState } from 'react'
import Header from '../components/Header'
import HeroSlider from '../components/HeroSlider'
import Products from '../components/Products'
import Cart from '../components/Cart'
import Footer from '../components/Footer'

function Home() {
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item._id === product._id)
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
    } else {
      setCartItems(cartItems.map(item =>
        item._id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ))
    }
  }

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item._id !== productId))
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartCount={cartItems.length} onCartClick={() => setShowCart(!showCart)} />
      <main className="flex-grow">
        <HeroSlider />
        <Products onAddToCart={addToCart} />
      </main>
      <Footer />
      
      {showCart && (
        <Cart
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          totalPrice={getTotalPrice()}
          onClose={() => setShowCart(false)}
        />
      )}
    </div>
  )
}

export default Home
