import { aggregateMarketDeals } from '../lib/market-data'
import { rankDeals } from '../lib/ranking-engine'

async function run() {
  const deals = await aggregateMarketDeals()
  const ranked = rankDeals(deals)

  console.log('=== Daily Market Summary ===')

  ranked.forEach((deal) => {
    console.log(`${deal.brand} ${deal.model}`)
    console.log(`Deal Score: ${deal.dealScore}`)
    console.log(`Estimated Profit: $${deal.estimatedProfit.toFixed(2)}`)
    console.log(`Reason: ${deal.rankReason}`)
    console.log('---')
  })
}

run()
