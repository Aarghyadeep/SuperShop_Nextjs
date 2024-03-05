"use client"

import { createContext, useState } from "react";

export const SearchContext = createContext({})

export function SearchContextProvider({children}) {

  const [prompt,setPrompt]= useState("");
   
  return (<SearchContext.Provider value={{prompt,setPrompt}}>
    {children}
  </SearchContext.Provider>)
}
