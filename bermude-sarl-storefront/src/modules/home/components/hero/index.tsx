"use client"
import { Button, Heading } from "@medusajs/ui"
import { useRouter } from "next/navigation"

const Hero = () => {
  const router = useRouter()

  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle flex items-center justify-center">
      <Button
        onClick={() => router.push("/store")}
        size="large"
        className="px-8 py-4 text-lg font-semibold"
      >
        Decouvrir le catalogue
      </Button>
    </div>
  )
}

export default Hero
