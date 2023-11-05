"use client"

import Image from "next/image"
import { useInView } from "react-intersection-observer"

import { cn } from "@/lib/utils"

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true })

  return (
    <div ref={ref} className="py-10 [perspective:2000px]">
      <div
        className={cn(
          "border-transparent-white relative rounded-lg border bg-white bg-opacity-[0.01] bg-hero-gradient",
          inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",
          "before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)]",
          inView && "before:animate-image-glow"
        )}
      >
        <Image
          src='/Screenshot 2023-11-05 031736.png'
          alt="hero"
          priority
          placeholder="blur"
          className={cn(
            "delay-[680ms] relative z-10 rounded-lg transition-opacity",
            inView ? "opacity-100" : "opacity-0"
          )}
        />
      </div>
    </div>
  )
}
