import "./App.css";
import Header from "./header/Header";
import Catagory from "./catagory/Catagory";
import HomeCard from "./Components/Card/HomeCard";
import Cart from "./Components/Cart/Cart";
// import Cart from "./Cart";
import { sample_data } from "./constant";
import { list_items } from "./constant";
import { sidebarData } from "./constant";
import SideBar from "./sideBar/SideBar";
import { useState } from "react";

function App() {
  //this is for cart
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const itemnew = prevCart.find((cartItem) => cartItem.id === item.id);
      if (itemnew) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemToRemove) => {
    setCart((prevCart) => {
      const itemnew = prevCart.find(
        (cartItem) => cartItem.id === itemToRemove.id
      );
      if (itemnew && itemnew.quantity > 1) {
        return prevCart.map((cartItem) =>
          cartItem.id === itemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        const newCart = prevCart.filter(
          (cartItem) => cartItem.id !== itemToRemove.id
        );
        if (newCart.length === 0) setIsCartOpen(false);
        return newCart;
      }
    });
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  //this is for side bar
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  // console.log(isSidebarOpen);
  return (
    <div className="App">
      <SideBar
        openSidebar={isSidebarOpen}
        onCloseSidebar={() => setSidebarOpen(false)}
        data={sidebarData}
      />
      <Header cart={cart} toggleCart={toggleCart} />
      <Catagory
        openSidebar={() => setSidebarOpen(true)}
        list_items={list_items}
      />
      <div className="home-card-container flex flex-wrap justify-center gap-4 p-4 mx-[150px]">
        {sample_data.map(function (data, index) {
          return <HomeCard key={index} data={data} addToCart={addToCart} />;
        })}
      </div>
      <Cart
        isCartOpen={isCartOpen}
        cart={cart}
        toggleCart={toggleCart}
        removeFromCart={removeFromCart}
        setCart={setCart}
      />
    </div>
  );
}

export default App;
