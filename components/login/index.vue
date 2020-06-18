<template>
  <!-- <h1>{{ say }}</h1> -->
  <div align-content-center class="px-9 py-7">
    <v-card tile flat>
      <v-card-text class="pa-0">
        <v-form>
          <v-text-field v-model="id" label="ID" :append-icon="'mdi-account'" />
          <v-text-field
            v-model="password"
            label="Password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-card-actions class="pa-0">
        <v-checkbox v-model="keepLoggedIn" label="로그인상태 유지" />
      </v-card-actions>
      <v-card-actions class="pa-0">
        <v-btn rounded color="primary" width="48%" height="50px" to="/signup">회원가입</v-btn>
        <v-spacer />
        <v-btn
          rounded
          color="primary"
          width="48%"
          height="50px"
          @click="login({ id, password, keepLoggedIn })"
        >로그인</v-btn>
      </v-card-actions>
      <v-card-text class="text-center">
        계정정보를 잃어버리셨나요? &nbsp;
        <v-btn color="primary" text to="/member/find">ID/PW찾기</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import axios from '~/plugins/axios/axios';
export default {
  name: 'LoginComponent',
  data() {
    return {
      id: null,
      password: null,
      showPassword: false,
      keepLoggedIn: false
    };
  },
  methods: {
    ...mapActions({
      login: 'login/doLogin'
    }),
    click() {
      alert('click');
    }
  },
  mounted() {
    this.$dialog.notify.info('hi');
  }
};
</script>
