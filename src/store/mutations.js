import * as types from './mutation-types'

const mutations = {
  [types.SET_GUIDE_STATUS] (state, guideStatus) {
    state.guideStatus = guideStatus
  },
  [types.SET_LOGIN_STATUS] (state, loginStatus) {
    state.loginStatus = loginStatus
  }
}

export default mutations
