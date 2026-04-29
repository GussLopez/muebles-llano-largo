'use client'

import { motion } from "motion/react";
import { Mail, Phone, MessageCircle, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  return (
    <section className="bg-(--claro) py-20" id="contacto">
      <div className="max-w-350 mx-auto px-4">
        {/* Encabezado de la sección */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary mb-4"
          >
            Contáctanos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg"
          >
            ¿Tienes un proyecto en mente o alguna duda sobre nuestros muebles?
            Estamos listos para ayudarte a transformar tu hogar.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Información de Contacto y WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Información de contacto</h3>
              <p className="text-gray-600 mb-8">
                Visítanos en nuestra carpintería o contáctanos por cualquiera de estos medios:
              </p>
            </div>

            <div className="space-y-6">
              {/* WhatsApp 1 */}
              <a
                href="https://wa.me/7443460699"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-lg border border-muted hover:border-primary/50 hover:bg-gray-50 transition-all group bg-white"
              >
                <div className="bg-green-100 p-3 rounded-full text-green-600 group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">WhatsApp</p>
                  <p className="text-lg font-bold text-primary">+52 7443460699</p>
                </div>
              </a>

              {/* WhatsApp 2 */}
              <a
                href="https://wa.me/7441360162"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-lg border border-muted hover:border-primary/50 hover:bg-gray-50 transition-all group bg-white"
              >
                <div className="bg-green-100 p-3 rounded-full text-green-600 group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">WhatsApp Pedidos Especiales</p>
                  <p className="text-lg font-bold text-primary">+52 7441360162</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white rounded-sm">
                <div className="bg-blue-100 p-3 rounded-full text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Ubicación</p>
                  <p className="text-gray-700">Llano Largo, Guerrero, México</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-5 rounded-md border border-muted bg-white"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Nombre</label>
                  <Input placeholder="Tu nombre" className="bg-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary">Teléfono</label>
                  <Input placeholder="Tu número" className="bg-white" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">Correo Electrónico</label>
                <Input type="email" placeholder="correo@ejemplo.com" className="bg-white" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary">Mensaje</label>
                <Textarea
                  placeholder="¿En qué mueble estás interesado?"
                  className="min-h-30 bg-white"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-[--secundario] text-white py-6 text-lg transition-all group">
                Enviar Mensaje
                <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}