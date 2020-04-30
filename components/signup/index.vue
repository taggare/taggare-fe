<template>
  <v-app>
    <form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="12">
            <v-text-field
              v-model="email"
              label="E-mail"
              :append-icon="'mdi-account'"
              hint="example@taggare.com"
              ref="email"
            ></v-text-field>
            <p v-show="isEmailError" class="white red—text" transition="scale-transition">
              {{ emailErrorMessage }}
            </p>
          </v-col>
          <!-- 패스워드 start -->
          <v-col cols="6" sm="6">
            <v-text-field
              v-model="password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              name="input-10-1"
              label="New Password"
              hint="At least 8 characters"
              counter
              @click:append="showPassword = !showPassword"
            ></v-text-field>
            <p v-show="isPasswordError" class="white red--text" transition="scale-transition">
              {{ passwordErrorMessage }}
            </p>
          </v-col>
          <v-col cols="6" sm="6">
            <v-text-field
              v-model="checkPassword"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              name="input-10-1"
              label="Confirm Password"
              hint="At least 8 characters"
              counter
              @click:append="showPassword = !showPassword"
            ></v-text-field>
            <p v-show="isCheckPasswordError" class="white red--text" transition="scale-transition">
              {{ checkPasswordErrorMessage }}
            </p>
          </v-col>
          <!-- 패스워드 end -->
          <!-- lastName start -->
          <v-col cols="6" sm="6">
            <v-text-field v-model="lastName" label="Last Name" hint="park"></v-text-field>
            <p v-show="isLastNameError" class="white red--text" transition="scale-transition">
              {{ lastNameErrorMessage }}
            </p>
          </v-col>
          <!-- 이름 -->
          <v-col cols="6" sm="6">
            <v-text-field v-model="firstName" label="First Name" hint="alex"></v-text-field>
            <p v-show="isFirstNameError" class="white red--text" transition="scale-transition">
              {{ firstNameErrorMessage }}
            </p>
          </v-col>
          <!-- 생년월일 -->
          <v-col cols="6" sm="6">
            <v-menu
              v-model="clickedDatePickerState"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="birth"
                  label="Birth"
                  :append-icon="'mdi-calendar-account'"
                  readonly
                  v-on="on"
                ></v-text-field>
                <p v-show="isBirthError" class="white red--text" transition="scale-transition">
                  {{ birthErrorMessage }}
                </p>
              </template>
              <v-date-picker
                v-model="birth"
                @input="clickedDatePickerState = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <!-- 성별 선택 -->
          <v-col cols="6" sm="6">
            <v-select
              v-model="gender"
              :items="genders"
              item-text="text"
              item-value="data"
              :append-icon="'mdi-gender-male-female'"
              :menu-props="{ top: true, offsetY: true }"
              label="Gender"
            ></v-select>
            <p v-show="isGenderError" class="white red--text" transition="scale-transition">
              {{ genderErrorMessage }}
            </p>
          </v-col>
          <!-- tel start -->
          <v-col cols="6" sm="6">
            <v-text-field
              type="text"
              v-model="tel"
              label="Mobile"
              hint="'-'없이 입력하세요 (01012345678)"
              :append-icon="'mdi-cellphone-iphone'"
            ></v-text-field>
            <p v-show="isTelError" class="white red--text" transition="scale-transition">
              {{ telErrorMessage }}
            </p>
          </v-col>
          <v-col cols="12" sm="12">
            <v-checkbox class="right-align" v-model="privacyAgree">
              <template v-slot:label>
                <div>개인정보 수집에 동의합니다.</div>
              </template>
            </v-checkbox>
            <p v-show="isPrivacyError" class="white red—text" transition="scale-transition">
              {{ privacyErrorMessage }}
            </p>
          </v-col>
          <v-btn class="mr-4" color="primary" @click="signUp()">회원가입</v-btn>
        </v-row>
      </v-container>
    </form>
  </v-app>
</template>
<script>
import { getHi } from '~/assets/test';
import axios from '~/plugins/axios/axios';
import { USER_RULE } from '~/assets/account/validation/validation';
export default {
  data() {
    return {
      email: null,
      isEmailError: false,
      emailErrorMessage: null,
      password: null,
      checkPassword: null,
      showPassword: false,
      isCheckPasswordError: false,
      checkPasswordErrorMessage: null,
      isPasswordError: false,
      passwordErrorMessage: null,
      lastName: null,
      isLastNameError: false,
      lastNameErrorMessage: null,
      firstName: null,
      isFirstNameError: false,
      firstNameErrorMessage: null,
      birth: null,
      isBirthError: false,
      birthErrorMessage: null,
      clickedDatePickerState: false,
      gender: null,
      genders: [{ text: '남자', data: 'MALE' }, { text: '여자', data: 'FEMALE' }],
      isGenderError: false,
      genderErrorMessage: null,
      tel: null,
      isTelError: false,
      telErrorMessage: null,
      privacyAgree: false,
      privacyErrorMessage: null,
      isPrivacyError: false
    };
  },
  created() {
    this.say = getHi();
  },
  mounted() {},
  methods: {
    async signUp() {
      try {
        const isSuccess = this.validateAll();
        console.log('isSuccdss:', isSuccess);
        if (isSuccess) {
          const user = {
            birth: this.birth,
            email: this.email,
            firstName: this.firstName,
            gender: this.gender,
            lastName: this.lastName,
            password: this.password,
            tel: this.tel
          };
          const { data } = await axios.post('/users', user);
          if (data.status == 'OK') {
            alert(data.message);
            this.$router.push('/login');
          }
          console.log(data);
        }
      } catch (e) {
        console.error(e.response);
      }
    },
    validateAll() {
      const isEmailSuccess = this.isEmailSuccess();
      const isPasswordSuccess = this.isPasswordSuccess();
      const isLastNameSuccess = this.isLastNameSuccess();
      const isFirstNameSuccess = this.isFirstNameSuccess();
      const isBirthSuccess = this.isBirthSuccess();
      const isGenderSuccess = this.isGenderSuccess();
      const isTelSuccess = this.isTelSuccess();
      return (
        isEmailSuccess &&
        isPasswordSuccess &&
        isLastNameSuccess &&
        isFirstNameSuccess &&
        isBirthSuccess &&
        isGenderSuccess &&
        isTelSuccess
      );
    },
    isEmailSuccess() {
      this.isEmailError = false;
      if (this.isEmpty(this.email)) {
        this.isEmailError = true;
        this.emailErrorMessage = USER_RULE.email.required;
        return false;
      }
      if (!USER_RULE.email.regex.test(this.email)) {
        this.isEmailError = true;
        this.emailErrorMessage = USER_RULE.email.invalid;
        return false;
      }
      return true;
    },
    isPasswordSuccess() {
      console.log('init');
      this.isPasswordError = false;
      if (this.isEmpty(this.password) || !USER_RULE.password.regex.test(this.password)) {
        this.isPasswordError = true;
        this.passwordErrorMessage = USER_RULE.password.required;
        return false;
      }
      this.isCheckPasswordError = false;
      if (this.password !== this.checkPassword) {
        this.isCheckPasswordError = true;
        this.checkPasswordErrorMessage = USER_RULE.password.invalid;
        return false;
      }
      return true;
    },
    isLastNameSuccess() {
      this.isLastNameError = false;
      if (this.isEmpty(this.lastName)) {
        this.isLastNameError = true;
        this.isLastNameErrorMessage = USER_RULE.lastName.required;
        return false;
      }
      return true;
    },
    isFirstNameSuccess() {
      this.isFirstNameError = false;
      if (this.isEmpty(this.firstName)) {
        this.isFirstNameError = true;
        this.firstNameErrorMessage = USER_RULE.firstName.required;
        return false;
      }
      return true;
    },
    isBirthSuccess() {
      this.isBirthError = false;
      if (this.isEmpty(this.birth)) {
        this.isBirthError = true;
        this.birthErrorMessage = USER_RULE.birth.required;
        return false;
      }
      return true;
    },
    isGenderSuccess() {
      this.isGenderError = false;
      if (this.isEmpty(this.birth)) {
        this.isGenderError = true;
        this.genderErrorMessage = USER_RULE.gender.required;
        return false;
      }
      return true;
    },
    isTelSuccess() {
      this.isTelError = false;
      if (this.isEmpty(this.tel)) {
        this.isTelError = true;
        this.telErrorMessage = USER_RULE.tel.required;
        return false;
      }
      if (!USER_RULE.tel.regex.test(this.tel)) {
        this.isTelError = true;
        this.telErrorMessage = USER_RULE.tel.invalid;
        return false;
      }
      return true;
    },
    isEmpty(value) {
      return value === null || value.trim() === '';
    }
  }
};
</script>
