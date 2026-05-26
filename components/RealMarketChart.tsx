'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const data = [
  { month: 'Jan', price: 7200 },
  { month: 'Feb', price: 7350 },
  { month: 'Mar', price: 7600 },
  { month: 'Apr', price: 7800 },
  { month: 'May', price: 8100 }
]

export default function RealMarketChart() {
  return (
    <div className="card">
      <h2>Historical Market Pricing</h2>

      <div style={{ width: '100%', height: 320 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <XAxis dataKey="month" stroke="#777" />
            <YAxis stroke="#777" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#d9d9d9"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
