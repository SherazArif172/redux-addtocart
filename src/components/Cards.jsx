import React, { useState } from "react";
import Cardsdata from "./CardsData";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const Cards = () => {
  // const [data, setData] = useState(Cardsdata);
  const item = useSelector((state) => state.cart.item);
  console.log(item);

  const dispatch = useDispatch();

  return (
    <div className="m-8">
      <h1 className="text-center text-3xl font-extrabold">
        Add to Cart Project
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-12">
        {item.map((data, index) => (
          <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  mt-6"
            key={index}
          >
            <a href="#">
              <img
                className="rounded-t-lg h-80 w-full"
                src={data.imgdata}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.rname}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                price : {data.price} $
              </p>
              <button
                onClick={() => dispatch(addToCart(item))}
                className="inline-flex items-center px-3 py-2  text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full justify-center font-bold text-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
