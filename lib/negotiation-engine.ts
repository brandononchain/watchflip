import { RankedDeal } from './types'

export function generateNegotiationStrategy(deal: RankedDeal) {
  const targetBuy = Math.round(deal.askingPrice * 0.93)

  return {
    targetBuy,
    opener: `I can move quickly today if we can get closer to $${targetBuy}.`,
    leverage: deal.boxPapers
      ? 'Use recent comp pricing and servicing uncertainty.'
      : 'Use missing box/papers and resale friction as leverage.',
    exitPoint: `Walk away above $${Math.round(deal.askingPrice * 0.97)}.`
  }
}
