import { getLocalStorage } from '../../utils/storage'

const namespace = 'home'
export { namespace }

export default {
  namespace,
  state: {
    count: 0
  },
  effects: {},
  reducers: {
    setState(state: any, { payload }: {payload: any}) {
      return { ...state, ...payload }
    }
  }
}
