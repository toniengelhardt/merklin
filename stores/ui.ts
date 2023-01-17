import { defineStore } from 'pinia'

export interface UIState {
  mobile?: boolean
  obscure: boolean
  addressDialogOpen: boolean
  networkDialogOpen: boolean
  performanceChartOptions: {
    unit: ChartUnitOption
    timeframe: ChartTimeframeOption
  }
  activityChartOptions: {
    timeframe: ChartTimeframeOption
  }
  gasBurnChartOptions: {
    unit: ChartUnitOption
    timeframe: ChartTimeframeOption
  }
}

export const defaultUIState: UIState = {
  obscure: false,
  addressDialogOpen: false,
  networkDialogOpen: false,
  performanceChartOptions: {
    unit: 'currency',
    timeframe: '1y',
  },
  activityChartOptions: {
    timeframe: '1y',
  },
  gasBurnChartOptions: {
    unit: 'currency',
    timeframe: '1y',
  },
}

export const useUIStore = defineStore('ui', {
  state: (): UIState => { return defaultUIState },
  persist: {
    paths: [
      'obscure',
      'performanceChartOptions',
      'activityChartOptions',
      'gasBurnChartOptions',
    ],
    // afterRestore: ({ store }) => {
    //   console.log('After restore', store)
    //   store = Object.assign(defaultUIState, store)
    // },
  },
})
