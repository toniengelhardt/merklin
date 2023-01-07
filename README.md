# M Ξ R K L 🧙🏽‍♂️ N

**Note:** I renamed the project from **m3tadata** to **merklin**. Not sure if this will be the final name, but for now it works I guess. You can find a preview of the app a [merklin.xyz](https://merklin.xyz). The theme changed, from jungle to magic 🪄.

This is an attempt to build an open-source EVM wallet explorer (similar to [Zapper](https://zapper.fi/), [Zerion](https://app.zerion.io/), etc.) based on [Vue](https://vuejs.org) and [Nuxt](https://nuxt.com) and supercharge it with powerful analytics and visualizations.

<img width="49%" alt="Merklin Preview Insights" src="https://user-images.githubusercontent.com/2703233/211148722-a13ec34b-a16d-45dd-98f0-af4f4172ca38.png"> <img width="49%" alt="Merklin Preview Transactions" src="https://user-images.githubusercontent.com/2703233/211148727-b61ca5ba-043c-45f3-873f-49b96fd9140f.png">


The idea is to focus primarily on on-chain analytics, i.a.

- Detailed insights of wallet activity
- Funds spent on gas
- Ingoing/outgoing addresses and transaction frequency
- Asset distribution between EVM networks
- D0xing score
- Network overview and comparison
- etc.

For now, only Ethereum and its L2 scaling solutions: [Ethereum](https://ethereum.org), [Arbitrum](https://arbitrum.io), [Optimism](https://www.optimism.io/), [Polygon](https://polygon.technology), [Gnosis](https://www.gnosis.io), [zkSync](https://zksync.io), etc.

Adding [Bitcoin](https://bitcoin.org) and [Lightning](https://lightning.network) later on would be amazing!

## Goals

### Powerful web app 

Secure web app that connects to all the popular wallets, starting with [MetaMask](https://metamask.io) and [WalletConnect](https://walletconnect.com). Using the app however should be possible without connecting a wallet.

### Web-only

No native apps! Native apps are not suitable for web3 as they are subject to App Store / Play Store T&Cs and lock out a big part of the global population. Instead, let's leverage the web platform to deliver native-like mobile apps (more on that in [this post](https://itnext.io/lets-build-a-native-like-web-app-nwa-22a553fee338)).

To check which web APIs are available on a given device you can just open [this page](https://webapicheck.com).

Related also, some wise words from [@jack](https://twitter.com/jack):

<img width="554" alt="Screenshot 2022-12-02 at 16 13 33" src="https://user-images.githubusercontent.com/2703233/205336586-2517bfd2-ead1-4ace-8091-4f988e9b2df3.png">

## Principles
 
1. The idea is to learn and have fun.
2. Let's stick with the fundamentals and focus on solving problems.
3. The fundamentals are pseudonymity and censorship resistance.
4. DX is everything.
5. Code is art.
6. 🌺 [Aloha Spirit](https://www.hawaii.edu/uhwo/clear/home/lawaloha.html).

## Stack

[Vue](https://vuejs.org), [Nuxt](https://nuxt.com), [Typescript](https://www.typescriptlang.org), [Vite](https://vitejs.dev), [Vitest](https://vitest.dev), [Pinia](https://pinia.vuejs.org), [UnoCSS](https://uno.antfu.me), [HeadlessUI](https://headlessui.com), [chart.js](https://chartjs.org), [ethers.js](https://ethers.io), [wagmi/core](https://wagmi.sh/core).

## Setup

Clone the repo, install the dependencies with pnpm, and you're ready to go.

Dev server launches by default on `http://localhost:3050`.

```bash
pnpm install
pnpm dev
```

## Documentation

Ideally, all code that is not self-explanatory should have documentation in the form of comments to make it easy for collaborators to understand. I hope this will improve as the project matures.

## CI

When opening a PR to `main`, GitHub actions will run the following checks:

- Lint (ESLint)
- Typecheck (vue-tsc)
- Build and run tests (Vitest)

Please make sure they pass!

## More

Please don't be afraid to ask questions, you can start a thread under Discussions for topics related to m3tadata specifically or consult the `web3` channel in the [Nuxt Discord](https://discord.com/invite/ps2h6QT) for more general questions about web3 and Nuxt.

Development insights available on [RepoTracker](https://repo-tracker.com/r/gh/toniengelhardt/m3tadata).

Feel free to play around and contribute. Discussions, Issues, PRs welcome!

Here's a [list](https://github.com/toniengelhardt/web3-vue-and-nuxt-projects) of web3 projects built with Vue/Nuxt.
