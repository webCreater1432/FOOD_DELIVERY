import React, { useContext, useState } from "react";
import Categories from "../Utils/Category";
import { food_items } from "./../Utils/Food";
import Card from "../Components/Card";
import { dataContext } from "../Context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../Components/Card2";

const HomePage = () => {
  let { cate, setcate, input ,showCart,setshowCart} = useContext(dataContext);
  const filter = (category) => {
    if (category == "All") {
      setcate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category
      );
      setcate(newList);
    }
  };
  return (
    <div className="w-full min-h-screen bg-slate-200">
      {/* Categories Section */}

      {!input ? (
        <div className="flex items-center justify-center flex-wrap gap-5 w-full ">
          {Categories.map((items) => {
            return (
              <div
                className="w-[140px] h-[150px] bg-white flex flex-col justify-center text-[20px] text-gray-600 rounded-lg shadow-xl cursor-pointer transition-all duration-200 hover:bg-green-200  items-center gap-5 p-5"
                onClick={() => filter(items.name)}
              >
                {items.icon}
                {items.name}
              </div>
            );
          })}
        </div>
      ) : null}

      {/* Food Section */}

      <div className="flex items-center w-full justify-center gap-4 flex-wrap p-10 pb-5">
        {cate.map((items) => (
          <Card
            title={items.food_name}
            image={items.food_image}
            id={items.id}
            price={items.price}
            type={items.food_type}
          />
        ))}
      </div>

      {/* Sidebar Section */}

      <div className={`w-[25vw] h-full fixed top-1 right-2 bg-white shadow-lg p-5 rounded-2xl transition-all ${showCart?"translate-x-0 duration-500":"translate-x-[100%] duration-500"}`}>
        <header className="w-full  flex justify-between items-center ">
          <span className="text-green-400 text-[18px] font-semibold">
            Order Items
          </span>
          <RxCross2 className="w-[30px] h-[30px] font-semibold text-green-400" onClick={()=>setshowCart(false)}/>
        </header>
        <Card2/>
      </div>
    </div>
  );
};

export default HomePage;
