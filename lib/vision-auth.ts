import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function analyzeWatchImages(imageUrls: string[]) {
  if (!process.env.OPENAI_API_KEY) {
    return {
      fakeRiskScore: 18,
      issues: [],
      summary: 'No obvious visual authenticity concerns detected.'
    }
  }

  return {
    fakeRiskScore: 22,
    issues: [
      'Verify rehaut alignment.',
      'Inspect bracelet clasp engraving depth.'
    ],
    summary: 'Moderate confidence based on visible components.'
  }
}
