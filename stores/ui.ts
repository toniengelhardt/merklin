import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
  state: (): {
    mobile?: boolean
    obscure: boolean
    addressDialogOpen: boolean
    performanceChartUnit: 'eth' | 'currency'
    activityChartTimeframe: '30d' | '3m' | '1y' | 'max'
    gasBurnChartUnit: 'eth' | 'currency'
  } => {
    return {
      mobile: undefined,
      obscure: false,
      addressDialogOpen: false,
      performanceChartUnit: 'currency',
      activityChartTimeframe: '1y',
      gasBurnChartUnit: 'currency',
    }
  },
  actions: {
  },
  persist: {
    paths: [
      'obscure',
      'performanceChartUnit',
      'activityTimeframe',
      'gasBurnChartUnit',
    ],
  },
})
