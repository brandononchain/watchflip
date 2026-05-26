console.log('Running scheduled watch deal scan...')

const mockDeals = [
  {
    brand: 'Rolex',
    model: 'Explorer 124270',
    askingPrice: 7150,
    marketPrice: 8000
  }
]

for (const deal of mockDeals) {
  const discount = ((deal.marketPrice - deal.askingPrice) / deal.marketPrice) * 100

  console.log(`Found deal: ${deal.brand} ${deal.model}`)
  console.log(`Discount: ${discount.toFixed(2)}%`)
}
