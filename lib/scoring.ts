export function scoreDeal(discountPercent: number, hasBoxPapers: boolean, verifiedSeller: boolean) {
  let score = 50

  score += discountPercent

  if (hasBoxPapers) score += 10
  if (verifiedSeller) score += 15

  return Math.min(100, Math.round(score))
}
