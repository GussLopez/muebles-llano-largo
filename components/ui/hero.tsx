'use client'
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function Hero() {

  return (
    <section className="bg-(--claro) py-20">
      <div className="max-w-350 mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .3, ease: 'easeIn', delay: 0.3 }}
            viewport={{ once: true }}
            className="font-bold text-5xl leading-tight text-primary">
            Muebles de madera con carácter y tradición
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .3, ease: 'easeIn', delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >Creamos piezas únicas que transforman tu hogar con la calidez y belleza natural de la madera. Diseño y calidad.</motion.p>
          <motion.div
            className="flex"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .3, ease: 'easeIn', delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link
              className="flex items-center gap-2 bg-primary hover:bg-(--secundario) text-white py-2 px-3 rounded transition-all font-medium group"
              replace
              href={'/#nuestros-muebles'}>
              Ver Muebles
              <ArrowRight size={22} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:scale-105" />
            </Link>

          </motion.div>
        </div>
        <motion.div
          className="max-h-100 rounded shadow-xl overflow-hidden"
           initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .3, ease: 'easeIn', delay: 1.2 }}
          viewport={{ once: true }}
        >
          <img src="/slide1.webp" alt="Place holder img" className="object-cover" />
        </motion.div>
      </div>
    </section>
  )
}
