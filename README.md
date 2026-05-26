# WatchFlip

AI-powered luxury watch flipping MVP.

WatchFlip helps source, score, analyze, and track watch deals with a practical flipping workflow.

## Features

- Deal scanner dashboard
- Profit calculator
- Deal scoring engine
- AI listing analyzer API
- Authentication checklist
- Dealer CRM workflow docs
- Supabase schema
- GitHub Actions scheduled workflows, no n8n
- Telegram alert script

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Workflows

GitHub Actions are included:

- `ci.yml` validates the app
- `scheduled-scan.yml` runs every 6 hours
- `daily-summary.yml` runs daily

## Required env vars

See `.env.example`.

## Disclaimer

This is a deal-evaluation and operations tool. It does not guarantee authenticity, profitability, or market liquidity. Always verify watches with qualified professionals before purchase.
