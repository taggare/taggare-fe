export default {
  setLoginSucess(state, payload) {
    state.isLogin = true;
    state.isLoginError = false;
    state.user = payload;
  },
  setLoginError(state, payload) {
    state.isLogin = false;
    state.isLoginError = true;
  },
  logout(state, payload) {
    state.isLogin = false;
    state.isLoginError = false;
    state.user = null;
  }
};
