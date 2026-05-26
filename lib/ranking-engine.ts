import { RankedDeal, WatchDeal } from './types'
import { scoreDeal } from './scoring'
import { calculateProfit } from './profit'

export function rankDeals(deals: WatchDeal[]): RankedDeal[] {
  return deals.map((deal) => {
    const discountPercent = ((deal.estimatedMarketPrice - deal.askingPrice) / deal.estimatedMarketPrice) * 100

    const estimatedProfit = calculateProfit({
      resalePrice: deal.estimatedMarketPrice,
      buyPrice: deal.askingPrice,
      fees: deal.estimatedMarketPrice * 0.065,
      shipping: 80,
      insurance: 60,
      service: 120,
      buffer: 150
    })

    const dealScore = scoreDeal(
      discountPercent,
      !!deal.boxPapers,
      !!deal.sellerVerified
    )

    return {
      ...deal,
      discountPercent,
      estimatedProfit,
      dealScore,
      rankReason: estimatedProfit > 500
        ? 'High margin and liquid model.'
        : 'Watchlist or negotiate lower.'
    }
  }).sort((a, b) => b.dealScore - a.dealScore)
}
