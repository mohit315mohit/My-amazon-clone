/* eslint-disable react/prop-types */
// import React from 'react'
import ion from "../assets/arrow.svg";

export default function SideBar({ openSidebar, onCloseSidebar, data }) {
  // console.log(openSidebar,"fghj")
  const content =
    "flex items-center justify-between py-3.5 text-[14px] leading-4 text-[#111111] cursor-pointer font-bold hover:bg-[#00050080]";
  return openSidebar ? (
    <div className="full-view w-[100dvw] h-[100dvg] flex z-[5] bg-transparent top-0 left-0">
      <div className="popup-background fixed z-[7] w-full h-full max-w-[100dvw] max-h-[100dvh] bg-[#00000080] left-0 top-0"></div>
      <div className="sidebar absolute top-0 left-0 w-[364px] h-full bg-white z-[9] flex flex-col overflow-y-auto ">
        <button className="bg-[rgb(34,47,62)] px-8 py-2 font-bold text-[19px] leading-[25px] flex gap-2 h-min ">
          <img src="" />
          Hello. sign In
        </button>
        {data.map((contain) => {
          return (
            <div
              key={contain.title}
              className="content-container flex flex-col px-8 py-2 border-b border-gray-500"
            >
              <div className="py-2 font-bold text-lg text-[#111111] leading-6">
                {contain.title}
              </div>
              <ul className="list-none p-0 m-0 flex flex-col">
                {contain.items.map((item, itemIndex) => (
                  <li key={itemIndex} className={content}>
                    {item.heading}
                    {item.arrow && (
                      <img src={ion} alt="Arrow" className="w-2.5 h-3.5" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        {/* <div className="content-container flex flex-col px-8 py-2 border-b border-gray-500">
          <div className="py-2font-bold text-lg text-[#111111] leading-6 ">
            Trending
          </div>
          <ul className="list-none p-0 m-0 flex flex-col ">
            <li className={content}>
              Today's Deals <img src="" alt="<" />
            </li>
            <li className={content}>Best Sellers</li>
            <li className={content}>Electronics</li>
            <li className={content}>Clothing</li>
            <li className={content}>Home & Garden</li>
            <li className={content}>Books</li>
          </ul>
        </div> */}
        <button
          onClick={onCloseSidebar}
          className="absolute top-0 right-0 text-black bg-white p-2 shadow-md"
        >
          X
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
}
