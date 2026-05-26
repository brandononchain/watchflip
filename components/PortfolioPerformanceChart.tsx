export default function PortfolioPerformanceChart() {
  return (
    <div className="card">
      <h2>Portfolio Performance</h2>

      <div
        style={{
          height: 280,
          borderRadius: 14,
          background: 'linear-gradient(180deg,#1b2028,#0f1318)',
          marginTop: 16
        }}
      />

      <div style={{ marginTop: 16 }}>
        <p>30D PnL: +12.8%</p>
        <p>Monthly Volume: $84,200</p>
      </div>
    </div>
  )
}
