"use client"
import { Button, Heading } from "@medusajs/ui"
import { useRouter } from "next/navigation"

const Hero = () => {
  const router = useRouter()

  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <Button onClick={() => router.push("/store")}>
        Decouvrir le catalogue
      </Button>
    </div>
  )
}

export default Hero
