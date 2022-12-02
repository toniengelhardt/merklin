# M Ξ T A D 🦧 T A

This project is an experiment to build a [Zapper](https://zapper.fi/) / [Zerion](https://app.zerion.io/) with [Nuxt](https://nuxt.com). 

![Preview](https://m3ta-data.vercel.app/preview.png)

The idea is to focus mostly on wallet analytics, e.g.

- Detailed charts of wallet activity
- Funds spent on gas cost over time
- Ingoing/outgoing addresses and frequency
- Asset distribution over networks
- Claimable airdops
- Ecosystem overview per network
- etc.

For now, only ETH networks: Ethereum, Arbitrum, Optimism, Polygon, zkSync.

Development insights available on [RepoTracker](https://repo-tracker.com/r/gh/toniengelhardt/m3tadata).

## Stack

- Typescript
- Nuxt 3
- Vite
- Vitest
- Pinia
- UnoCSS
- HeadlessUI
- Ethers.js
- Chart.js

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3050

```bash
pnpm dev
```

