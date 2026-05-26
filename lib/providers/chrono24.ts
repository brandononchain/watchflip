import { WatchDeal } from '../types'

export async function fetchChrono24Deals(query = 'Rolex Explorer') : Promise<WatchDeal[]> {
  const apiKey = process.env.CHRONO24_API_KEY

  if (!apiKey) {
    return [
      {
        brand: 'Rolex',
        model: 'Explorer 124270',
        reference: '124270',
        askingPrice: 7150,
        estimatedMarketPrice: 8100,
        source: 'chrono24',
        sourceUrl: 'https://www.chrono24.com/search/index.htm?query=Rolex+Explorer+124270',
        sellerName: 'Demo Verified Dealer',
        sellerVerified: true,
        boxPapers: true,
        condition: 'Very Good',
        year: 2023,
        currency: 'USD',
        listingTitle: 'Rolex Explorer 124270 Full Set'
      }
    ]
  }

  // Production placeholder: route through your compliant data provider/proxy.
  return []
}
