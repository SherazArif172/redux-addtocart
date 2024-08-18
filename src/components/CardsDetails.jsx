import { Trash2 } from "lucide-react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const CardsDetails = () => {
  const { allcart } = useSelector((state) => state.cart);
  console.log(allcart);

  return (
    <div className="">
      <p className="text-2xl font-bold mt-7 text-center">Item Detail page</p>
      {allcart.map((data) => (
        <div className="flex justify-between max-w-[1000px] border-2 m-auto mt-10 p-5">
          <div>
            <img src={data.imgdata} alt="" />
          </div>
          <div>
            <div className="flex gap-10 justify-center">
              <p>price {data.price}$</p>
              <p>Rating {data.rating} Stars</p>
            </div>
            <div className="mt-5 flex gap-10 justify-center">
              <p>Dishes: Nort Indian </p>
              <p>{data.somedata}</p>
            </div>
            <div className="mt-5 flex gap-10 justify-center">
              <p>Total Amount : 300$</p>
              <p className="flex gap-3">
                Remove <Trash2 />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsDetails;
