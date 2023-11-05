"use client"

import { FC, useEffect } from "react"
import Link from "next/link"
import { stagger, useAnimate } from "framer-motion"

import { cn } from "@/lib/utils"
import { buttonVariants } from "..//../components/ui/button"
import { Icons } from "..//icons"

import { HeroImage } from "./heroImage"

const HeroSection: FC = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      "#transform-anim",
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.5, ease: "easeIn", delay: stagger(0.3) }
    )
  })

  return (
    <section className="mt-[4vh]">
      <div
        ref={scope}
        className="relative flex flex-col items-center justify-center gap-y-24"
      >
        <HeroImage />
      </div>
    </section>
  )
}

export default HeroSection
