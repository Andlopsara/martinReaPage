"use client"
import Link from "next/link"
import { useState } from "react"
import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  // Lista de imágenes para el carrusel
  const images = [
    "/images/Martinrea_About_Hero.jpg",
    "/images/imagen2.jpg",
    "/images/imagen3.jpg",
  ]

  // Estado para controlar el índice de la imagen actual
  const [currentIndex, setCurrentIndex] = useState(0)

  // Función para ir a la imagen anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  // Función para ir a la imagen siguiente
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="min-h-[86.5vh] flex flex-col items-center text-center px-4 py-16 bg-transparent">

      {/* Carrusel de imágenes */}
      <div className="relative w-full max-w-4xl h-64 overflow-hidden mb-8">
        {/* Contenedor que se desplaza horizontalmente */}
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Botón "Prev" (flecha) */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full shadow hover:bg-gray-700 transition-colors"
        >
          ❮
        </button>

        {/* Botón "Next" (flecha) */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full shadow hover:bg-gray-700 transition-colors"
        >
          ❯
        </button>
      </div>

      {/* Títulos */}
      <h1 className="text-4xl sm:text-7xl font-bold mb-4 animate-bounce">
        {/* Título principal (opcional) */}
      </h1>
      {/* Botón de acceso a la documentación */}
      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({
            className:
              "px-6 py-3 bg-gray-800 hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-transform duration-300 transform hover:scale-105 shadow-lg",
            size: "lg",
          })}
        >
          Ver documentación
        </Link>
      </div>
    </div>
  )
}
