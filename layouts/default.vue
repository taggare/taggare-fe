<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list-item two-line>
        <v-btn fab disabled>
          <i class="v-icon notranslate mdi mdi-account theme--light" />
        </v-btn>
        <v-list-item-content v-if="isLogin" class="py-5 px-4">
          <v-list-item-title class="my-2">{{ user.data.firstName }} {{ user.data.lastName}}님</v-list-item-title>
          <v-btn small rounded outlined color="error" @click="logout(), (drawer = false)">로그아웃</v-btn>
        </v-list-item-content>
        <v-list-item-content v-else class="py-5 px-4">
          <v-list-item-title class="my-2">로그인 해주세요.</v-list-item-title>
          <v-btn small rounded outlined color="primary" to="/login">로그인/회원가입</v-btn>
        </v-list-item-content>
      </v-list-item>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'mdi-account-plus',
          title: 'Signup',
          to: '/signup'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    };
  },
  beforeCreate() {
    if (process.client) {
      this.$store.dispatch('login/getUserInfo');
    }
  },
  methods: {
    ...mapActions({
      logout: 'login/logout'
    })
  },
  computed: {
    ...mapState({
      isLogin: state => state.login.isLogin,
      user: state => state.login.user
    })
  }
};
</script>
