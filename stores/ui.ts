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
  actionQueue: ActionId[]
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
  actionQueue: [], // Used to render a loading indicator.
}

export const useUIStore = defineStore('ui', {
  state: (): UIState => { return defaultUIState },
  getters: {
    loading(state) {
      return state.actionQueue.length > 0
    },
  },
  actions: {
    queueAction(actionId: ActionId) {
      this.actionQueue.push(actionId)
    },
    unqueueAction(actionId: ActionId) {
      const idx = this.actionQueue.indexOf(actionId)
      if (idx >= 0) {
        this.actionQueue.splice(idx, 1)
      }
    },
  },
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
