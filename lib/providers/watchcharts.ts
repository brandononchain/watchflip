export async function fetchWatchChartsHistory(reference: string) {
  const apiKey = process.env.WATCHCHARTS_API

  if (!apiKey) {
    return {
      reference,
      prices: [7200, 7350, 7600, 7800, 8100],
      timestamps: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    }
  }

  // Production integration placeholder.
  return {
    reference,
    prices: [],
    timestamps: []
  }
}
