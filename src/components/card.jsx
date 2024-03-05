import Image from "next/image";
import { motion } from "framer-motion";

export default function Card({ product }) {
  return (
    <div className="h-[100px] w-60">
      <motion.div 
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{opacity: 0 }}
      layout 
      className="group relative block overflow-hidden
      hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
  <button
    className="absolute end-4 top-4 z-10 rounded-full bg-blue-100 p-1.5 text-gray-900 hover:text-gray-900/75"
  >
    <span className="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

  <Image
    src={product.src}
    alt="slide"
    width="100"
    height="100"
    className="h-52 w-full"
  />

  <div className="relative border border-gray-200 p-4 rounded-b-md">

    <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>

    <p className="text-sm text-gray-700 mb-1">{product.price}</p>

    <button
        className="block w-full rounded bg-red-400 p-2 text-sm text-white font-medium transition hover:scale-105"
      >
        Add to Cart
      </button>

  </div>
</motion.div>
    </div>
  )
}
