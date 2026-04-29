import { Armchair } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-350 mx-auto px-4 md:flex justify-between py-10">
        <Link href={'/'} className="flex items-center gap-2 justify-center md:justify-start">
          <Armchair size={30} />
          <h2 className="text-2xl font-bold  hover:text-primary/80 transition-colors cursor-pointer text-primary">Muebleria Llano Largo</h2>
        </Link>

        <p className="text-gray-500 text-center mb:text-start mt-5 md:mt-0">© {year} Muebleria Llano Largo - Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
