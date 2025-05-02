import React, { useContext, useState } from "react";
import Categories from "../Utils/Category";
import { food_items } from './../Utils/Food';
import Card from "../Components/Card";
import { dataContext } from "../Context/UserContext";

const HomePage = () => {
  let{cate,setcate,input}=useContext(dataContext)
  const filter=(category)=>{
    if (category=="All") {
      setcate(food_items)
    }
    else{
     let newList=food_items.filter((item)=>(item.food_category===category))
     setcate(newList)
     
    }
  }
  return (
    <div className="w-full min-h-screen bg-slate-200">
      {/* Categories Section */}

      <div className="flex items-center justify-center flex-wrap gap-5 w-full ">
        {Categories.map((items) => {
          return (
            <div className="w-[140px] h-[150px] bg-white flex flex-col justify-center text-[20px] text-gray-600 rounded-lg shadow-xl cursor-pointer transition-all duration-200 hover:bg-green-200  items-center gap-5 p-5"
            onClick={()=>filter(items.name)}
            >
              {items.icon}
              {items.name}
            </div>
          );
        })}
      </div>

      {/* Food Section */}

      <div className="flex items-center w-full justify-center gap-4 flex-wrap mt-20 pb-5">
        {
        cate.map((items)=>(
          <Card title={items.food_name} image={items.food_image} id={items.id} price={items.price} type={items.food_type} />
        ))
        }
      </div>
    </div>
  );
};

export default HomePage;
