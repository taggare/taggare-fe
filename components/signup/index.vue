<template>
  <v-app>
    <form>
      <v-text-field v-model="name" cl></v-text-field>
      <v-text-field v-model="email"></v-text-field>
      <v-select v-model="select" :items="items"></v-select>
      <v-checkbox v-model="checkbox"></v-checkbox>
      <v-btn class="mr-4" @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </v-app>
</template>
<script>
import { getHi } from '~/assets/test';
export default {
  data() {
    return {
      name: null,
      email: null,
      select: null,
      checkbox: false,
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    };
  },
  created() {
    this.say = getHi();
  },
  methods: {
    click() {
      alert('click');
    },
    submit() {
      this.validate(this.name);
    },
    validate(name) {
      if (this.name === null || this.name.trim() === '') {
        console.log('name is null');
        return;
      }
      console.log(this.name);
    },
    clear() {
      this.$v.$reset();
      this.name = '';
      this.email = '';
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>
