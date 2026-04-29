"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [toggleSidebar, setToggleSidebar] = useState(false)

  return (
    <header className="bg-white shadow border-b border-gray-200">
      <div className="max-w-350 mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={'/'} className="text-2xl font-bold hover:text-primary/80 transition-colors cursor-pointer text-primary">Muebleria Llano Largo</Link>
        {toggleSidebar && (
          <div
            className="fixed inset-0 z-10 bg-black/30 backdrop-blur-sm md:hidden"
            onClick={() => setToggleSidebar(false)}
          ></div>
        )}
        <nav className="">
          {/* Sidebar mobile */}
          <ul
            className={`fixed top-0 right-0 h-screen w-62.5 z-999 bg-white shadow-lg flex-col items-start justify-start p-4 transition-transform duration-300 ${toggleSidebar ? "flex" : "hidden"
              } md:hidden`}
          >
            <li className="w-full mb-4 flex justify-end">
              <button onClick={() => setToggleSidebar(false)} className="flex justify-end cursor-pointer hover:bg-gray-50">
                <X size={26} />
              </button>
            </li>
            <li className="w-full">
              <a href="/" className="block px-4 py-2 w-full hover:bg-gray-100">
                Inicio
              </a>
            </li>
            <li className="w-full">
              <a href="/muebles" className="block px-4 py-2 w-full hover:bg-gray-100">
                Muebles
              </a>
            </li>
            <li className="w-full">
              <a href="/contacto" className="block px-4 py-2 w-full hover:bg-gray-100">
                Contacto
              </a>
            </li>
          </ul>

          {/* Desktop nav */}
          <ul className="flex gap-6">
            <li className="hidden md:block">
              <Link href="/" className="flex items-center font-semibold text-sm hover:text-(--secundario) transition-colors">
                Inicio
              </Link>
            </li>
            <li className="hidden md:block">
              <Link href="/muebles" className="flex items-center font-semibold text-sm hover:text-(--secundario) transition-colors">
                Muebles
              </Link>
            </li>
            <li className="flex md:hidden ">
              <button onClick={() => setToggleSidebar(true)} className="cursor-pointer">
                <Menu size={28} />
              </button>
            </li>
          </ul>
        </nav>
        <Link href={'/contacto'} className="bg-primary text-white px-3 py-2 font-medium rounded hidden md:block hover:bg-[--secundario] hover:shadow-lg hover:-translate-y-0.5 transition-all ">Contáctanos</Link>
      </div>
    </header>
  )
}
