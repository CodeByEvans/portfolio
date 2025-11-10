"use client";

import { useEffect, useRef } from "react";
import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

interface Card {
  id: number;
  title: string;
  description: string;
  icon: string;
  badge: string;
  gradient: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: "Aventuras",
    description:
      "Explora paisajes impresionantes y vive experiencias únicas en la naturaleza",
    icon: "🏔️",
    badge: "Popular",
    gradient: "from-purple-600 via-blue-600 to-purple-800",
  },
  {
    id: 2,
    title: "Océanos",
    description:
      "Sumérgete en las profundidades azules y descubre la vida marina",
    icon: "🌊",
    badge: "Trending",
    gradient: "from-pink-500 via-red-500 to-pink-600",
  },
  {
    id: 3,
    title: "Bosques",
    description: "Conecta con la naturaleza en bosques mágicos llenos de vida",
    icon: "🌲",
    badge: "Nuevo",
    gradient: "from-cyan-400 via-blue-500 to-cyan-600",
  },
  {
    id: 4,
    title: "Desiertos",
    description: "Experimenta la inmensidad y belleza de los paisajes áridos",
    icon: "🏜️",
    badge: "Destacado",
    gradient: "from-green-400 via-emerald-500 to-teal-500",
  },
  {
    id: 5,
    title: "Ciudades",
    description: "Vive la energía de las metrópolis más vibrantes del mundo",
    icon: "🌃",
    badge: "Premium",
    gradient: "from-pink-400 via-rose-400 to-yellow-400",
  },
  {
    id: 6,
    title: "Espacio",
    description: "Mira más allá de nuestro mundo y explora el cosmos infinito",
    icon: "⭐",
    badge: "Exclusivo",
    gradient: "from-cyan-500 via-blue-600 to-indigo-900",
  },
];

export default function Carousel3D() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        modules: [Navigation, Pagination, EffectCoverflow, Autoplay],
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        coverflowEffect: {
          rotate: 20,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        speed: 800,
      });

      return () => {
        swiper.destroy();
      };
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Efectos de fondo animados */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] -top-[10%] -left-[10%] rounded-full bg-gradient-to-br from-pink-500 to-purple-600 blur-[80px] opacity-30 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] -bottom-[10%] -right-[10%] rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 blur-[80px] opacity-30 animate-pulse delay-700" />
        <div className="absolute w-[350px] h-[350px] top-1/2 left-1/2 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 blur-[80px] opacity-30 animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-5 tracking-tight">
            Experiencias Increíbles
          </h1>
          <p className="text-white/70 text-xl font-light">
            Descubre un mundo de posibilidades
          </p>
        </div>

        {/* Swiper Carousel */}
        <div ref={swiperRef} className="swiper pb-24">
          <div className="swiper-wrapper">
            {cards.map((card) => (
              <div key={card.id} className="swiper-slide !w-80 !h-[450px]">
                <div className="group relative w-full h-full rounded-3xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-400">
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient} transition-transform duration-600 group-hover:scale-110`}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80" />

                  {/* Glass effect on active */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative z-10 h-full p-8 flex flex-col justify-end text-white">
                    {/* Badge */}
                    <span className="absolute top-5 right-5 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                      {card.badge}
                    </span>

                    {/* Icon */}
                    <div className="text-7xl mb-5 drop-shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {card.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold mb-3 drop-shadow-lg">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed opacity-90 drop-shadow-md">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="swiper-pagination !bottom-0 [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet]:h-3 [&_.swiper-pagination-bullet]:bg-white/50 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet-active]:w-8 [&_.swiper-pagination-bullet-active]:rounded-md [&_.swiper-pagination-bullet-active]:bg-gradient-to-r [&_.swiper-pagination-bullet-active]:from-purple-500 [&_.swiper-pagination-bullet-active]:to-pink-500" />

          {/* Navigation Buttons */}
          <div className="swiper-button-next !w-12 !h-12 !bg-white/10 backdrop-blur-md !rounded-full !border !border-white/20 after:!text-xl after:!font-black after:!text-white hover:!bg-white/20 transition-all hover:scale-110" />
          <div className="swiper-button-prev !w-12 !h-12 !bg-white/10 backdrop-blur-md !rounded-full !border !border-white/20 after:!text-xl after:!font-black after:!text-white hover:!bg-white/20 transition-all hover:scale-110" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        .delay-700 {
          animation-delay: 700ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
}
