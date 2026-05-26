import { NextRequest, NextResponse } from 'next/server'
import { analyzeListing } from '../../../lib/ai-analyzer'

export async function POST(req: NextRequest) {
  const body = await req.json()

  const analysis = await analyzeListing(body)

  return NextResponse.json(analysis)
}
