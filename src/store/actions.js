import router from '../router'
import * as types from './mutation-types'

export const login = ({commit, state}) => {
  const flag = true
  if (flag) {
    router.push('index')
    commit(types.SET_GUIDE_STATUS, false)
    commit(types.SET_LOGIN_STATUS, true)
  } else {
    commit(types.SET_GUIDE_STATUS, true)
    commit(types.SET_LOGIN_STATUS, false)
  }
}

export const hideAppNav = ({commit, state}) => {
  commit(types.SET_APP_NAV_SHOW, false)
}

export const showAppNav = ({commit, state}) => {
  commit(types.SET_APP_NAV_SHOW, true)
}
