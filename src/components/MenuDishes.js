import { useState } from "react";
import { url } from "../constant";
import image from "./assets/placeholder-image.jpg";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./Cartslice";

export const MenuDishes = ({ item }) => {
  const { id, name, description, price, imageId, defaultPrice } = item;

  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(0);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    setItemCount(itemCount + 1);
  };
  const handleRemoveItem = (id) => {
    let updatedCount;
    dispatch(removeItem(id));
    updatedCount = itemCount > 0 ? itemCount - 1 : 0;
    setItemCount(updatedCount);
  };

  const hasImage = !!imageId;
  return (
    <div
      className="flex w-full basis-[848px] max-h-[180px] h-40 border-b justify-between p-10 items-center"
      key={id}
    >
      <div className="flex flex-col basis-[400px]">
        <h3 className="font-bold text-lg w-3/5">{name}</h3>
        <p className="text-lg">
          {price > 0
            ? "₹ " + Math.trunc(item.price / 100)
            : "₹ " + Math.trunc(item.defaultPrice / 100)}
          {""}
        </p>
        <p className="mt-3.5 leading-5 text-gray-desc w-[300px] text-base  ">
          {description?.slice(0, 60)}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-[148px] h-[150px] relative">
        <img
          src={hasImage ? url + imageId : image}
          className="w-full h-[126px] rounded-lg"
        />
        <div className=" flex justify-evenly items-center w-[85px] h-[30px] mt-0.5 text-gray-count outline-none border bg-green-500 border-gray absolute bottom-1 text-white rounded-lg border-gray">
          <button
            className="text-2xl text-gray-count font-semibold"
            onClick={() => handleRemoveItem(id)}
          >
            {" "}
            -{" "}
          </button>
          <span className="text-base text-green"> {itemCount} </span>
          <button
            className="text-green text-2xl"
            onClick={() => handleAddItem(item)}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
