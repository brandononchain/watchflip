export function forecastResalePrice({
  currentMarketPrice,
  historicalGrowthRate,
  monthsForward
}: {
  currentMarketPrice: number
  historicalGrowthRate: number
  monthsForward: number
}) {
  const projected = currentMarketPrice * Math.pow(1 + historicalGrowthRate, monthsForward / 12)

  return {
    projectedPrice: Math.round(projected),
    confidence: 0.72
  }
}
