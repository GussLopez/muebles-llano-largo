'use client'
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

type productosProps = {
  nombre: string;
  img: string;
}

export default function OurProducts() {
  const productos = [
    {
      nombre: "Sillas",
      img: "/Silla1.webp"
    },
    {
      nombre: "Bancas",
      img: "/productos/sillas/Silla5.webp"
    },
    {
      nombre: "Cajoneras",
      img: "/productos/cajoneras/Cajonera2.webp"
    },
    {
      nombre: "Centros de entretenimiento",
      img: "/productos/centro/centro1.webp"
    },
    {
      nombre: "Roperos",
      img: "/productos/roperos/ropero2.webp"
    },
    {
      nombre: "Mesas de Comedor",
      img: "/product6.webp"
    },
  ]

  return (
    <>
      <aside className="bg-(--claro) py-20">
        <div className="max-w-350 mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .3, ease: 'easeIn', delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl mb-4 text-center font-bold text-primary"
            >Nuestros Muebles</motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .3, ease: 'easeIn', delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center text-gray-600">Descubre nuestra colección de muebles artesanales, donde cada pieza cuenta una historia de dedicación y pasión por la madera</motion.p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {productos.map((producto: productosProps, i) => (
              <motion.li
                key={i}
                className="bg-white rounded-b shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .3, ease: 'easeIn', delay: i * .2 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-75 overflow-hidden rounded-t">
                  <img src={producto.img} alt="Imagen Producto" loading="lazy" className="object-cover" />
                </div>
                <div className="p-6 flex flex-col">
                  <h3 className="mb-3 text-2xl font-semibold text-primary">{producto.nombre}</h3>
                  <Link
                    className="w-full py-2 border border-primary text-center font-medium rounded hover:bg-primary hover:text-white transition-colors"
                    href={'/muebles'}
                  >
                    Ver más
                  </Link>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  )
}
