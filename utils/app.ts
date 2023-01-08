import { version } from '~/package.json'

export const appVersion = version

export const appMenuItems = [
  {
    icon: {
      name: 'home',
    },
    label: 'Overview',
    title: 'Overview',
    link: '/',
  },
  {
    icon: {
      name: 'transaction',
    },
    label: 'Transactions',
    title: 'Transactions',
    link: '/transactions',
  },
  /*{
    icon: {
      name: 'assets',
    },
    label: 'Assets',
    title: 'Assets',
    link: '/assets',
  }, */
  {
    icon: {
      name: 'nft',
    },
    label: 'NFTs',
    title: 'NFTs',
    link: '/nfts',
  },
  {
    icon: {
      name: 'network',
    },
    label: 'Networks',
    title: 'Networks',
    link: '/networks',
  },
]
