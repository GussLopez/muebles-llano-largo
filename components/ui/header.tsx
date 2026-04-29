"use client";
import { Armchair, Menu } from "lucide-react";
import Link from "next/link"
import { useState } from "react"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "./drawer"

export default function Header() {
  const [open, setOpen] = useState(false)

  const handleScroll = (id: string) => {
    setOpen(false)

    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      }
    }, 200)
  }

  const handleScrollTop = () => {
    setOpen(false)

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }, 200)
  }
  return (
    <header className="fixed top-0 right-0 w-full shadow border-b z-10 border-gray-200 bg-white">
      <div className="max-w-350 mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href={'/'}
          className="flex items-center gap-2 text-2xl font-bold hover:text-primary/80 transition-colors cursor-pointer text-primary"
          replace
        >
          <Armchair size={30} />
          Muebleria Llano Largo
        </Link>
        <nav className="">
          {/* Sidebar mobile */}
          <Drawer direction="right" open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <button
                className="block md:hidden size-"
              >
                <Menu size={25} />
              </button>
            </DrawerTrigger>
            <DrawerContent className="z-9999">
              <DrawerHeader>
                <DrawerTitle className="flex items-center gap-2 text-xl">
                  <Armchair size={30} />
                  Menu
                </DrawerTitle>
              </DrawerHeader>
              <ul className="text-base">
                <li className="w-full">
                  <button
                    onClick={handleScrollTop}
                    className="block px-4 py-2 w-full hover:bg-gray-100 text-left"
                  >
                    Inicio
                  </button>
                </li>
                <li className="w-full">
                  <button
                    onClick={() => handleScroll("nuestros-muebles")}
                    className="block px-4 py-2 w-full hover:bg-gray-100 text-left"
                  >
                    Muebles
                  </button>
                </li>
                <li className="w-full">
                  <button
                    onClick={() => handleScroll("contacto")}
                    className="block px-4 py-2 w-full hover:bg-gray-100 text-left"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </DrawerContent>
          </Drawer>

          {/* Desktop nav */}
          <ul className="flex gap-6">
            <li className="hidden md:block">
              <Link
                href="/"
                className="flex items-center font-semibold text-sm hover:text-(--secundario) transition-colors"
                replace
              >
                Inicio
              </Link>
            </li>
            <li className="hidden md:block">
              <Link
                href="/#nuestros-muebles"
                className="flex items-center font-semibold text-sm hover:text-(--secundario) transition-colors"
                replace
              >
                Muebles
              </Link>
            </li>
            <li className="hidden md:block">
              <Link
                href="/#contacto"
                className="flex items-center font-semibold text-sm hover:text-(--secundario) transition-colors"
                replace
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
