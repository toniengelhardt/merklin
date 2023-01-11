# M Ξ R K L 🧙🏽‍♂️ N

Merklin is an attempt to build an open-source web-only ([PWA](https://web.dev/progressive-web-apps/)) [EVM](https://ethereum.org/en/developers/docs/evm) wallet explorer similar to [Zapper](https://zapper.fi/), [Zerion](https://app.zerion.io/), etc. It's made with [Nuxt 3](https://nuxt.com) and the goal is to provide an educational resource and to introduce [Vue](https://vuejs.org) to the [web3](https://ethereum.org/en/web3) stack.

<div style="display:flex;">
  <img width="76.4%" alt="Merklin Preview desktop" src="https://user-images.githubusercontent.com/2703233/211625431-b588e175-72ab-406f-b6ec-6ad6414b2440.png">
  <img width="22.6%" alt="Merklin Preview mobile" src="https://user-images.githubusercontent.com/2703233/211804163-0251d023-51f0-4246-b4eb-7c7b6bec5da4.png">
</div>

The idea is to focus primarily on on-chain analytics and visualization, i.a.

- Detailed insights of wallet activity
- Funds spent on gas fees
- Ingoing/outgoing addresses, transaction frequency, etc.
- Asset distribution across networks
- NFT storage location and mutability
- Network status and comparison
- etc.

For now, only [Ethereum](https://ethereum.org) and L2 scaling solutions: [Arbitrum](https://arbitrum.io), [Optimism](https://www.optimism.io), [Polygon](https://polygon.technology), [Gnosis](https://www.gnosis.io),  etc.

Adding the [Bitcoin](https://bitcoin.org) and [Lightning](https://lightning.network) networks is also very important, but that's for later.

## Concepts

### Privacy first

Pseudonymity is a core concept of decentralized protocols and preserving it is highest priority. This means, data should only be stored locally on a user's device and different addresses should never be linked together, except on the blockchain itself.

### Approachability

We are still early! It's important that users who are new to decentralized applications have an easy entry point and can playfully learn how to use the app. For that, UX is key.

### Web-only

No native apps! Native apps are not suitable for web3 as they are subject to App Store / Play Store T&Cs and lock out a big part of the global population. Instead, let's leverage the web platform to deliver a native-like mobile experience. More on that in [this post](https://itnext.io/lets-build-a-native-like-web-app-nwa-22a553fee338).

Related to this, some wise words from [@jack](https://twitter.com/jack):

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

Ideally, all code that is not self-explanatory should have documentation in the form of comments to make it easy for collaborators to understand. I hope this will improve as the project matures. At some point there might also be real docs based on [Docus](https://docus.dev).

## CI

When opening a PR to `main`, GitHub actions will run the following checks:

- Lint ([ESLint](https://eslint.org))
- Typecheck ([vue-tsc](https://www.npmjs.com/package/vue-tsc))
- Build and run tests ([Vitest](https://vitest.dev)) for Linux, OS X, and Windows

Please make sure they pass!

## Contribute

Feel free to play around and contribute, open issues, report bugs, and give feedback. The best way to start is to drop a comment on an issue you want to work on, that way we can avoid overlap.

Please don't be afraid to ask questions! You can start a thread under Discussions for topics related to Merklin specifically or consult the `web3` channel in the [Nuxt Discord](https://discord.com/invite/ps2h6QT) for more general questions about web3 and Nuxt. At some point we might also have our own Discord server.

---

Development insights are available on [RepoTracker](https://repo-tracker.com/r/gh/toniengelhardt/merklin).

Here's a [list of web3 projects](https://github.com/toniengelhardt/web3-vue-and-nuxt-projects) that already use Vue in their stack.
