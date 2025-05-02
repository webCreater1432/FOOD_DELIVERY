import React, { useContext, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { MdFastfood } from "react-icons/md";
import { dataContext } from "../Context/UserContext";
import { food_items } from "../Utils/Food";

const Navbar = () => {
  let { input, setinput, cate, setcate ,setshowCart} = useContext(dataContext);
  useEffect(() => {
    let newList = food_items.filter(
      (items) =>
        items.food_name.includes(input) ||
        items.food_name.toLowerCase().includes(input)
    );
    setcate(newList);
  }, [input]);

  return (
    <div className="w-full h-[100px] bg-slate-200 flex items-center justify-between px-5 md:px-8 ">
      <div className="w-[60px] h-[60px] rounded-md shadow-md bg-white flex justify-center items-center">
        <MdFastfood className="w-[30px] h-[30px] text-green-400 " />
      </div>
      <form
        className="flex items-center gap-5 p-5 w-[50%] md:w-[70%] h-[60px] bg-white rounded-xl shadow-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className=" text-green-500 w-[20px] h-[20px]" />
        <input
          type="text"
          placeholder="Search Items Here..."
          className="w-full outline-none text-green-600 md:text-[20px] text-[16px]"
          onChange={(e) => setinput(e.target.value)}
          value={input}
        />
      </form>
      <div className="w-[60px] h-[60px] rounded-md flex shadow-md bg-white items-center justify-center relative"
      onClick={()=>setshowCart(true)}>
        <span className="absolute top-0 right-2 text-green-500 font-semibold">
          0
        </span>
        <LuShoppingBag className="w-[30px] h-[30px] text-green-400 " />
      </div>
    </div>
  );
};

export default Navbar;
