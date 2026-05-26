import { NextResponse } from 'next/server'
import { aggregateMarketDeals } from '../../../lib/market-data'
import { rankDeals } from '../../../lib/ranking-engine'

export async function GET() {
  const deals = await aggregateMarketDeals()
  const ranked = rankDeals(deals)

  return NextResponse.json(ranked)
}
