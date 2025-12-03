import { Badge } from "@medusajs/ui"

const PaymentTest = ({ className }: { className?: string }) => {
  return (
    <Badge color="orange" className={className}>
      <span className="font-semibold">Attention:</span> Uniquement pour les
      tests
    </Badge>
  )
}

export default PaymentTest
