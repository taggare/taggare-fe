<template>
  <v-app>
    <form>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
      ></v-text-field>
      <!-- <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Item"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Do you agree?"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox> -->

      <v-btn class="mr-4" @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </v-app>
</template>
<script>
import { getHi } from '~/assets/test';
import axios from '~/plugins/axios/axios';
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
  mounted() {
    this.getUser();
  },
  methods: {
    emailErrors() {
      const errors = [];
      if (this.email === null || this.email.trim() === '') {
        errors.push('이메일은 반드시 입력하셔야합니다.');
        return;
      }
      return errors;
    },
    async getUser() {
      try {
        const { data } = await axios.get('/users/1');
        console.log(data);
      } catch (e) {
        console.error(e.response);
      }
    },
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
