import React from "react";

const Card = ({title,image,id,price,type}) => {
  return (
    <div className="w-[300px] h-[400px] bg-white p-3 rounded-lg shadow-lg flex flex-col gap-3" key={id}>
      <div className="w-full h-[60%] overflow-hidden">
        <img src={image} alt="" className="object-cover rounded-lg" />
      </div>
      <div className="text-2xl font-semibold">  
        {title}
      </div>
      <div className="flex justify-between w-full items-center p-5">
        <div className="text-lg font-bold text-green-500">{price}</div>
        <div className="flex justify-center items-center gap-2 text-green-500 font-semibold"> <span>{type}</span></div>
      </div>
      <button className="w-full p-3 rounded-lg hover:bg-green-400 transition-all bg-green-300 hover:text-gray-700">Add To Dish</button>
    </div>
  );
};

export default Card;
