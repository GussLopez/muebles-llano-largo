'use client'
import { ArrowUp } from "lucide-react";
import { Button } from "./button";
import { useEffect, useState } from "react";

export default function ScrollToTopBtn() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      setVisible(scrolled > 500);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <Button
      className={`fixed left-5 bottom-10 cursor-pointer ${visible ? 'block': 'hidden'}`}
      onClick={scrollToTop}
    >
      <ArrowUp size={20} />
      <span className="sr-only">Volver al inicio</span>
    </Button>
  )
}
