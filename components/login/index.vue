<template>
  <!-- <h1>{{ say }}</h1> -->
  <div id="app">
    <v-app id="inspire">
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text @click="snackbar = true">Click</v-btn>

          <v-btn color="orange" text>Explore</v-btn>
        </v-card-actions>
      </v-card>
      <div class="text-center ma-2">
        <v-btn dark @click="snackbar = true">Open Snackbar</v-btn>
        <v-snackbar v-model="snackbar" :left="true">
          {{ text }}
          <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
        </v-snackbar>
      </div>
    </v-app>
  </div>
</template>
<script>
import { getHi } from '~/assets/test';
export default {
  data() {
    return {
      say: null,
      snackbar: false,
      text: "Hello, I'm a snackbar",
    };
  },
  created() {
    this.say = getHi();
  },
  methods: {
    click() {
      alert('click');
    },
  },
};
</script>