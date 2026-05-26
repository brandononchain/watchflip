export type WatchDeal = {
  id?: string
  brand: string
  model: string
  reference?: string
  askingPrice: number
  estimatedMarketPrice: number
  source: 'chrono24' | 'ebay' | 'manual' | 'watchcharts'
  sourceUrl?: string
  sellerName?: string
  sellerVerified?: boolean
  boxPapers?: boolean
  condition?: string
  year?: number
  currency?: string
  imageUrl?: string
  listingTitle?: string
  description?: string
  createdAt?: string
}

export type DealAnalysis = {
  authenticityRisk: number
  liquidityScore: number
  pricingConfidence: number
  redFlags: string[]
  negotiationAngle: string
  resaleSummary: string
  recommendation: 'buy' | 'negotiate' | 'watch' | 'avoid'
}

export type RankedDeal = WatchDeal & {
  discountPercent: number
  estimatedProfit: number
  dealScore: number
  rankReason: string
  analysis?: DealAnalysis
}

export type InventoryItem = {
  id?: string
  brand: string
  model: string
  reference?: string
  purchasePrice: number
  resalePrice?: number
  status: 'sourced' | 'purchased' | 'listed' | 'sold' | 'passed'
  platformFees?: number
  shipping?: number
  insurance?: number
  serviceCost?: number
  authenticationCost?: number
  buffer?: number
  notes?: string
}
