'use client'
import { XIcon } from "lucide-react";
import { MorphingDialog, MorphingDialogClose, MorphingDialogContainer, MorphingDialogContent, MorphingDialogImage, MorphingDialogTrigger } from "../motion-primitives/morphing-dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";
import { useState } from "react";


interface dataProps {
  path: string;
  data: {
    img: string;
  }[]
}

interface ModalProps {
  img: string;
  open: boolean;
}

export default function ProdcutCarousel({ path, data = [] }: dataProps) {
  const [modal, setModal] = useState<ModalProps | null>(null);

  return (
    <Carousel className="w-full max-w-full relative">
      <CarouselContent className="-ml-1">
        {data.map((mueble, i) => (
          <CarouselItem key={i} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5 flex justify-center">
            <div className="p-1">
              <div key={i} className="bg-white rounded-b shrink-0">
                <MorphingDialog
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                  }}
                >
                  <MorphingDialogTrigger>
                    <div className="rounded-md overflow-hidden">
                      <img
                        src={`${path}${mueble.img}`}
                        alt="Imagen Producto"
                        className="w-full h-64 sm:h-72 object-cover mx-auto"
                      />
                    </div>
                  </MorphingDialogTrigger>
                  <MorphingDialogContainer>
                    <MorphingDialogContent className='relative'>
                      <MorphingDialogImage
                        src={`${path}${mueble.img}`}
                        alt='Imagen del producto'
                        className='h-auto w-full max-w-[90vw] rounded-lg object-cover lg:h-[90vh]'
                      />
                    </MorphingDialogContent>
                    <MorphingDialogClose
                      className='fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1'
                      variants={{
                        initial: { opacity: 0 },
                        animate: {
                          opacity: 1,
                          transition: { delay: 0.3, duration: 0.1 },
                        },
                        exit: { opacity: 0, transition: { duration: 0 } },
                      }}
                    >
                      <XIcon className='h-5 w-5 text-zinc-500' />
                    </MorphingDialogClose>
                  </MorphingDialogContainer>
                </MorphingDialog>

              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 sm:left-4 xl:-left-12" />
      <CarouselNext className="right-2 sm:right-4 xl:-right-12" />

    </Carousel>
  )
}