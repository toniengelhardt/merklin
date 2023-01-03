import { version } from '~/package.json'

export const appVersion = version

export const appMenuItems = [
  {
    icon: {
      name: 'insights',
    },
    label: 'Insights',
    title: 'Insights',
    link: '/',
  },
  {
    icon: {
      name: 'assets',
    },
    label: 'Assets',
    title: 'Assets',
    link: '/assets',
  },
  {
    icon: {
      name: 'nft',
    },
    label: 'NFTs / SBTs',
    title: 'NFTs and SBTs',
    link: '/nfts',
  },
  {
    icon: {
      name: 'transaction',
    },
    label: 'Transactions',
    title: 'Transactions',
    link: '/transactions',
  },
  {
    icon: {
      name: 'blockchain',
    },
    label: 'Networks',
    title: 'Networks',
    link: '/networks',
  },
]
