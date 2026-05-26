# Vercel Deployment

## Connect Repo

1. Go to Vercel
2. Import GitHub repository
3. Select `watchflip`

## Environment Variables

Add:

- OPENAI_API_KEY
- WATCHCHARTS_API
- CHRONO24_API_KEY
- EBAY_APP_ID
- SUPABASE_URL
- SUPABASE_ANON_KEY

## Build Settings

Framework Preset: Next.js

Build Command:

npm run build

Output Directory:

.next

## Recommended Production Stack

- Vercel
- Supabase
- OpenAI
- Upstash Redis
- Cloudflare Images
