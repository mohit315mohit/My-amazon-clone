/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Cart.jsx

import React from "react";
// import "./Cart.css";

export default function Cart({
  isCartOpen,
  cart,
  toggleCart,
  removeFromCart,
  setCart,
}) {
  const totalAmount = cart.reduce(
    (total, item) => total + item.Price * item.quantity,
    0
  );
  return (
    isCartOpen && (
      <div className="cart-dropdown absolute top-[60px] right-6 bg-white shadow-lg w-64 p-4 rounded-md">
        <h2 className="text-xl font-bold mb-2">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-2 border-b"
              >
                <div className="flex items-center">
                  <div>
                    <img
                      src={item.Image}
                      alt={item.Title}
                      className="h-12 w-12 object-contain mr-2"
                    />
                    <span className="text-[8px]">
                      Quantity :{item.quantity}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span>{item.Title}</span>
                    <span className="text-black-500 text-sm flex">
                      Rs.{item.Price}
                      <p className="text-[5px] pt-1">only</p>
                    </span>
                    <div className=" flex gap-1">
                      <span className="text--500 text-[10px]">
                        <s>{item.OldPrice}</s>
                      </span>
                      <span className="text-red-500 text-xs">
                        {Math.round(
                          ((item.OldPrice - item.Price) / item.OldPrice) * 100
                        )}
                        % off
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        {cart.length > 0 && (
          <div className="mt-4 flex justify-between">
            <span className="font-bold">Total: Rs. {totalAmount}</span>
          </div>
        )}
        {/* Place Order Button */}
        {cart.length > 0 && (
          <button
            onClick={() => {
              alert("Order Placed!");
              setCart([]);
            }}
            className="mt-4 p-2 bg-orange-300 text-white rounded w-full"
          >
            Place Order
          </button>
        )}

        <button
          onClick={toggleCart}
          className="mt-4 p-2 bg-orange-300 text-white rounded w-full"
        >
          Close Cart
        </button>
      </div>
    )
  );
}
