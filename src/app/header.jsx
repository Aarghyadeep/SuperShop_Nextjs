"use client"

import Image from "next/image";
import { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { IoPersonCircleOutline } from "react-icons/io5";
import { SearchContext } from "./context/SearchContext";


export default function Header() {

  const [search, setSearch] = useState("");
  const { setPrompt } = useContext(SearchContext);


  return (
    <div className="flex md:flex-row md:gap-0 gap-3 flex-col p-3 overflow-hidden top-0 w-full
    bg-white shadow-md fixed right-0 left-0 z-20">
                      {/* Logo */}
       <div onClick={()=> location.reload()} className="flex gap-1 items-center ml-3 hover:opacity-80
       basis-1/3 cursor-pointer">
      <Image
      src= "/Logo.png"
      height= "40"
      width= "40"
      alt="logo" 
      />
      <p className="md:text-2xl text-lg font-bold">
        Super<span className="text-red-500">Store</span></p>  
       </div> 
                       
          <div className="basis-2/3 flex justify-between md:gap-0 gap-2">
                     {/* Search  */}
       <div className=" w-full flex items-center md:h-full rounded-3xl md:w-[400px] 
       border-[1.5px] border-solid hover:border-red-400
        ">
          <input 
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
          className="p-3 w-[90%] h-full outline-none rounded-3xl" type="text" />
          <p onClick={()=>{
            setPrompt(search)
          }} className="text-center"><BsSearch 
          className="cursor-pointer text-lg md:text-xl text-gray-500" /></p>
       </div>
                        {/* cart */}
       <div className="md:gap-10 gap-5 flex items-center text-gray-500  
        mr-2 md:mr-5">
          <ImCart className="md:text-3xl text-xl cursor-pointer hover:text-red-500 transition hover:scale-125" />
          <IoPersonCircleOutline className="md:text-4xl text-2xl cursor-pointer hover:text-red-500 transition hover:scale-125" />
       </div>
          </div>
    </div>
  )
}
