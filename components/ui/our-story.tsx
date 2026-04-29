'use client'
import { motion } from "motion/react";

export default function OurStory() {


  return (
    <aside className="bg-white py-20">
      <div className="max-w-350 mx-auto px-4 space-y-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .3, ease: 'easeIn', delay: .3 }}
          viewport={{ once: true }}
          className="mb-6 text-center text-4xl font-bold text-primary">Transforma tu hogar con nuestros muebles artesanales</motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .3, ease: 'easeIn', delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-15 text-lg text-gray-600 text-center">Cada pieza que creamos está diseñada para durar generaciones y embellecer tu espacio con la calidez natural de la madera.</motion.p>

      </div>
    </aside>
  )
}
