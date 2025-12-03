"use client"
import { Button, Heading } from "@medusajs/ui"
import { useRouter } from "next/navigation"
import Image from "next/image"

const Hero = () => {
  const router = useRouter()

  return (
    <div className="relative h-[75vh] w-full flex items-center justify-center border-b border-ui-border-base">
      {/* Background image */}
      <Image
        src="/shop.webp"
        alt="Shop"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl">
        <Heading level="h1" className="text-4xl md:text-5xl font-bold mb-4">
          Découvrez notre univers Shopping
        </Heading>

        <p className="text-lg md:text-xl mb-8 opacity-90">
          Une sélection unique de produits tendance, soigneusement choisis pour
          vous.
        </p>

        <Button
          onClick={() => router.push("/store")}
          size="large"
          className="px-10 py-5 text-lg font-semibold bg-white text-black hover:bg-gray-200"
        >
          Découvrir le catalogue
        </Button>
      </div>
    </div>
  )
}

export default Hero
