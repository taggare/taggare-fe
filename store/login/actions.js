import loginAxios from '~/plugins/axios/axios';

export default {
  /**
   * @userObj {id, password, keepLoggedIn}
   */
  async doLogin({ dispatch, commit }, userObj) {
    try {
      if (!userObj.id || !userObj.password) {
        alert('아이디 또는 비밀번호를 확인해주세요');
        return;
      }
      // console.log('userObj: ch', userObj);

      const url = `/oauth/token?username=${userObj.id}&password=${
        userObj.password
      }&grant_type=password`;

      const config = {
        auth: {
          username: 'taggare',
          password: '7ghj90iokmnbgs2bm9iokmhbvcv'
        }
      };

      const { data } = await loginAxios.post(url, {}, config);

      if (data) {
        if (userObj.keepLoggedIn) {
          // 로컬스토리지
          localStorage.setItem('accessToken', data.access_token);
          localStorage.setItem('refreshToken', data.refresh_token);
        } else {
          // 세션 스토리지
          sessionStorage.setItem('accessToken', data.access_token);
          sessionStorage.setItem('refreshToken', data.refresh_token);
        }
        // commit('setLoginSuccess', )
        dispatch('getUserInfo');
      }
      // /oauth/token?username=test&password=pass1234#$&grant_type=password
      // accesstoken, refreshToken
    } catch (error) {
      console.error(error);
    }
  },
  async getUserInfo({ dispatch, commit }) {
    try {
      let accessToken = null;
      const tokenBySessionStorage = sessionStorage.getItem('accessToken');
      const tokenByLocalStorage = localStorage.getItem('accessToken');
      if (Boolean(tokenBySessionStorage) || Boolean(tokenByLocalStorage)) {
        accessToken = tokenBySessionStorage || tokenByLocalStorage;
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        };

        const { data } = await loginAxios.get('/users/me', config);
        if (data) {
          commit('setLoginSucess', data);
          this.$router.push({ path: '/', query: { isLogginSuccess: true } });
        } else {
          commit('setLoginError');
        }
      }
    } catch (error) {
      console.error(error);
      commit('setLoginError');
    }
  },
  async logout({ commit }) {
    commit('logout');
    sessionStorage.clear();
    localStorage.clear();
    this.$router.push('/login');
  }
};
