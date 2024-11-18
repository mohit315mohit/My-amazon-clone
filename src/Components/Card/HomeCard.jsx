/* eslint-disable react/prop-types */
// import React from 'react'
// import "./HomeCard.css";

export default function HomeCard({ data, addToCart }) {
  return (
    <div className="home-card bg-white flex flex-col gap-2 p-4 rounded border border-gray-200 text-gray-900">
      <div className="home-card-title text-[22px] font-bold leading-[27px]">
        {data.title}
      </div>
      <div className="home-card-items-container max-w-[273px] flex flex-wrap gap-3">
        {data.items.map((item) => (
          <div
            key={item.id}
            className="home-card-items flex flex-col gap-1 shadow-"
          >
            <img
              className="home-card-image w-full h-full object-contain"
              src={item.Image}
              alt={item.Title}
            />
            <div className="home-card-items-title text-xs font-bold leading-4 text-gray-800">
              {item.Title}
            </div>

            <button
              onClick={() => addToCart(item)}
              className="add-to-cart bg-orange-300 text-xs rounded p-1"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <a
        className="home-card-redirect flex justify-start items-center text-blue-500 cursor-pointer hover:text-[#c7501f]"
        href={data.redirect.url}
      >
        {data.redirect.label}
      </a>
    </div>
  );
}
