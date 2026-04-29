import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Hero from "@/components/ui/hero";
import OurProducts from "@/components/ui/our-products";
import OurStory from "@/components/ui/our-story";
import { silla, cajoneras, mesas, roperos, centro, sillones, otros } from '../src/data'
import ProdcutCarousel from "@/components/ui/product-carousel";
import ContactSection from "@/components/ui/contact-form";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OurStory />
        <OurProducts />

        <main className="max-w-350 mx-auto px-4 py-5">


          <section className="mb-20">
            <h2 id="sillas" className="text-2xl mb-5 font-semibold text-primary">Sillas - Bancas</h2>
            <ProdcutCarousel path='/productos/sillas/' data={silla} />
          </section>
          <section className="mb-20">
            <h2 id="cajoneras" className="text-2xl mb-5 font-semibold text-primary">Cajoneras</h2>
            <ProdcutCarousel path='/productos/cajoneras/' data={cajoneras} />
          </section>

          <section className="mb-20">
            <h2 id="comedores" className="text-2xl mb-5 font-semibold text-primary">Mesas - Comedores</h2>
            <ProdcutCarousel path='/productos/mesas/' data={mesas} />
          </section>

          <section className="mb-20">
            <h2 id="roperos" className="text-2xl mb-5 font-semibold text-primary">Roperos</h2>
            <ProdcutCarousel path='/productos/roperos/' data={roperos} />
          </section>

          <section className="mb-20">
            <h2 id="entretenimiento" className="text-2xl mb-5 font-semibold text-primary">Centros de entretenimiento</h2>
            <ProdcutCarousel path='/productos/centro/' data={centro} />
          </section>

          <section className="mb-20">
            <h2 id="sillones" className="text-2xl mb-5 font-semibold text-primary">Sillones</h2>
            <ProdcutCarousel path='/productos/sillones/' data={sillones} />
          </section>

          <section className="mb-20">
            <h2 id="otros" className="text-2xl mb-5 font-semibold text-primary">Otros Mubeles</h2>
            <ProdcutCarousel path='/productos/otros/' data={otros} />
          </section>
        </main>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
