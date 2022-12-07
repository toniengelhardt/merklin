# M Ξ T A D 🦧 T A

🏴‍☠️ 🏴‍☠️ 🏴‍☠️

This is an attempt to build an open-source [Zapper](https://zapper.fi/)/[Zerion](https://app.zerion.io/) based on [Vue](https://vuejs.org) and [Nuxt](https://nuxt.com) and supercharge it with [Dune](https://dune.com)-like analytics.

<img width="1680" alt="MΞTAD🦧TA preview insights" src="https://user-images.githubusercontent.com/2703233/206278704-cabaa31e-db4c-4c1d-a39a-26a08b62956e.png">

The idea is to focus mostly on powerful wallet analytics, e.g.

- Detailed charts of wallet activity
- Funds spent on gas over time
- Ingoing/outgoing addresses with transaction frequency
- Asset distribution between networks
- Airdrop detection
- Ecosystem overview for each network with links
- etc.

For now, only ETH networks: [Ethereum](https://ethereum.org), [Arbitrum](https://arbitrum.io), [Optimism](https://www.optimism.io/), [Polygon](https://polygon.technology), [Gnosis](https://www.gnosis.io), [zkSync](https://zksync.io), etc.

## Goals

### Powerful web app 

Secure web app that connects to all the popular wallets, starting with [MetaMask](https://metamask.io).

### Web-only

No native apps! Native apps are not suitable for web3 as they are subject to App Store / Play Store T&Cs and lock out a big part of the global population. Instead, let's leverage the web platform to deliver native-like mobile apps (more on that in [this post](https://itnext.io/lets-build-a-native-like-web-app-nwa-22a553fee338)).

Some wise words from [@jack](https://twitter.com/jack):

<img width="554" alt="Screenshot 2022-12-02 at 16 13 33" src="https://user-images.githubusercontent.com/2703233/205336586-2517bfd2-ead1-4ace-8091-4f988e9b2df3.png">

## Principles
 
1. The idea is to learn and have fun.
2. Let's stick with the fundamentals and focus on solving problems.
3. The fundamentals are pseudonymity and censorship resistance.
4. DX is everything.
5. Code is art.
6. 🌺 [Aloha Spirit](https://www.hawaii.edu/uhwo/clear/home/lawaloha.html).

## Stack

- [Typescript](https://www.typescriptlang.org)
- [Nuxt](https://nuxt.com)
- [Vite](https://vitejs.dev)
- [Vitest](https://vitest.dev)
- [Pinia](https://pinia.vuejs.org)
- [UnoCSS](https://uno.antfu.me)
- [HeadlessUI](https://headlessui.com)
- [Ethers.js](https://ethers.io)
- [Chart.js](https://chartjs.org)

That's for now, might evolve...

Thinking about adding [Naive UI](https://www.naiveui.com), looks really cool.

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3050`

```bash
pnpm dev
```

## More

Development insights available on [RepoTracker](https://repo-tracker.com/r/gh/toniengelhardt/m3tadata).

Feel free to play around and contribute. Discussions, Issues, PRs welcome!

Here's a [list](https://github.com/toniengelhardt/web3-vue-and-nuxt-projects) of web3 projects built with Vue/Nuxt.

## License

[MIT](https://github.com/toniengelhardt/m3tadata/blob/main/LICENSE)
