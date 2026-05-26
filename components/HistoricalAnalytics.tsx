'use client'

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts'

const data = [
  { month: 'Jan', pnl: 3200 },
  { month: 'Feb', pnl: 4800 },
  { month: 'Mar', pnl: 6200 },
  { month: 'Apr', pnl: 7100 },
  { month: 'May', pnl: 8400 }
]

export default function HistoricalAnalytics() {
  return (
    <div className="card">
      <h2>Historical PnL Analytics</h2>

      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <XAxis dataKey="month" stroke="#777" />
            <YAxis stroke="#777" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="pnl"
              stroke="#d8d8d8"
              fill="#252a33"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
