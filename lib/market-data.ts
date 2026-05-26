import { WatchDeal } from './types'

const WATCHCHARTS_API = process.env.WATCHCHARTS_API || ''
const EBAY_APP_ID = process.env.EBAY_APP_ID || ''

export async function fetchWatchChartsMarketPrice(reference: string) {
  if (!WATCHCHARTS_API) {
    return {
      marketPrice: 0,
      source: 'mock'
    }
  }

  return {
    marketPrice: 8250,
    source: 'watchcharts'
  }
}

export async function fetchChrono24MockDeals(): Promise<WatchDeal[]> {
  return [
    {
      brand: 'Rolex',
      model: 'Explorer 124270',
      reference: '124270',
      askingPrice: 7150,
      estimatedMarketPrice: 8100,
      source: 'chrono24',
      sellerVerified: true,
      boxPapers: true,
      condition: 'Very Good',
      year: 2023,
      currency: 'USD',
      listingTitle: 'Rolex Explorer 124270 Full Set'
    }
  ]
}

export async function fetchEbayMockDeals(): Promise<WatchDeal[]> {
  return [
    {
      brand: 'Omega',
      model: 'Speedmaster Professional',
      reference: '310.30.42.50.01.001',
      askingPrice: 5200,
      estimatedMarketPrice: 6100,
      source: 'ebay',
      sellerVerified: true,
      boxPapers: false,
      condition: 'Good',
      year: 2022,
      currency: 'USD',
      listingTitle: 'Omega Speedmaster Moonwatch'
    }
  ]
}

export async function aggregateMarketDeals() {
  const chronoDeals = await fetchChrono24MockDeals()
  const ebayDeals = await fetchEbayMockDeals()

  return [...chronoDeals, ...ebayDeals]
}
