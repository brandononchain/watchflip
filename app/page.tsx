import { aggregateMarketDeals } from '../lib/market-data'
import { rankDeals } from '../lib/ranking-engine'

export default async function HomePage() {
  const deals = await aggregateMarketDeals()
  const ranked = rankDeals(deals)

  return (
    <div className="terminal-shell">
      <aside className="sidebar">
        <h1>WatchFlip</h1>
        <p>Luxury Watch Trading Terminal</p>
      </aside>

      <main className="main-content">
        <div className="grid">
          {ranked.map((deal, index) => (
            <div key={index} className="card">
              <h2>{deal.brand} {deal.model}</h2>
              <p>Deal Score: {deal.dealScore}</p>
              <p>Estimated Profit: ${deal.estimatedProfit.toFixed(0)}</p>
              <p>Discount: {deal.discountPercent.toFixed(2)}%</p>
              <p>{deal.rankReason}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
