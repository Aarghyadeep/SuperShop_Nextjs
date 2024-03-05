"use client"

import Card from '@/components/card'
import { products } from "@/data"
import { SearchContext } from './context/SearchContext'
import { useContext } from 'react'
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {

  const {prompt} = useContext(SearchContext);
  
  return (
    <motion.div layout className='md:mt-24 mt-36 flex items-center justify-center'>
      <div
      layout
      className='grid md:grid-cols-3 grid-cols-1 gap-y-64 gap-x-20 items-center'>
        <AnimatePresence>
        {products.filter((product)=> 
         { return prompt.toLowerCase() === ""
          ? product
          : product.title.toLowerCase().includes(prompt);}
        ).map((product, idx)=> (
         <Card key={idx} product={product} />
        ))}
        </AnimatePresence>
    </div>
    </motion.div>
)}
