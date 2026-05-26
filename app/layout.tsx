import './globals.css'

export const metadata = {
  title: 'WatchFlip Terminal',
  description: 'Bloomberg-style terminal for luxury watch trading and flipping.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
