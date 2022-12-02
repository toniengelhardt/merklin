# M Ξ T A D 🦧 T A

This project is an experiment to build a [Zapper](https://zapper.fi/) / [Zerion](https://app.zerion.io/) with [Nuxt](https://nuxt.com). 

![Preview](https://m3ta-data.vercel.app/preview.png)

The idea is to focus mostly on powerful wallet analytics, e.g.

- Detailed charts of wallet activity
- Funds spent on gas over time
- Ingoing/outgoing addresses with transaction frequency
- Asset distribution between networks
- Airdops detection
- Ecosystem overview for each network with links
- etc.

For now, only ETH networks: [Ethereum](https://ethereum.org), [Arbitrum](https://arbitrum.io), [Optimism](https://www.optimism.io/), [Polygon](https://polygon.technology), [zkSync](https://zksync.io).

## Goals

### Powerful web app 

Secure web app that connects to all the popular wallets.

### Web-only for mobile

No native apps! Native apps are note suitable for web3 as they are subject to App Store / Play Store T&Cs and lock out a big part of the global population. Instead, let's leverage the web platform to deliver native-like mobile apps.

Some wise words from @jack:

<img width="554" alt="Screenshot 2022-12-02 at 16 13 33" src="https://user-images.githubusercontent.com/2703233/205336586-2517bfd2-ead1-4ace-8091-4f988e9b2df3.png">

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

## More

Development insights available on [RepoTracker](https://repo-tracker.com/r/gh/toniengelhardt/m3tadata).

Feel free to play around and contribute. Discussions, Issues, PRs welcome!

