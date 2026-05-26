import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    comps: [
      {
        model: 'Rolex Explorer 124270',
        soldPrice: 8050,
        marketplace: 'eBay'
      },
      {
        model: 'Rolex Explorer 124270',
        soldPrice: 8150,
        marketplace: 'Chrono24'
      }
    ]
  })
}
