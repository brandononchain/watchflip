export function calculateFakeRiskScore({
  missingBoxPapers,
  suspiciousPrice,
  sellerUnverified,
  aftermarketParts
}: {
  missingBoxPapers: boolean
  suspiciousPrice: boolean
  sellerUnverified: boolean
  aftermarketParts: boolean
}) {
  let score = 0

  if (missingBoxPapers) score += 15
  if (suspiciousPrice) score += 30
  if (sellerUnverified) score += 20
  if (aftermarketParts) score += 35

  return Math.min(100, score)
}
