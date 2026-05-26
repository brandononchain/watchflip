export function calculateProfit({
  resalePrice,
  buyPrice,
  fees,
  shipping,
  insurance,
  service,
  buffer
}: {
  resalePrice: number
  buyPrice: number
  fees: number
  shipping: number
  insurance: number
  service: number
  buffer: number
}) {
  return resalePrice - buyPrice - fees - shipping - insurance - service - buffer
}
