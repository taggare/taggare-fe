/**
 * @description Enum for common USER_RULE.
 * @readonly
 * @enum {{message: string, regex: object}}
 */
export const USER_RULE = Object.freeze({
  email: {
    required: '이메일을 입력해주세요.',
    invalid: '이메일이 형식에 맞지 않습니다.',
    regex: /^[_a-zA-Z0-9-\.]+@[\.a-zA-Z0-9-]+\.[a-zA-Z]+$/
  },
  password: {
    required: '숫자, 영문, 특수문자 혼합 8-25자리로 입력해주세요.',
    invalid: '입력한 비밀번호와 재입력한 비밀번호가 일치하지 않습니다.',
    regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,25}$/
  },
  lastName: {
    required: '성을 입력해주세요.'
  },
  firstName: {
    required: '이름을 입력하세요.'
  },
  birth: {
    required: '생년월일을 입력하세요.'
  },
  gender: {
    required: '성별을 선택하세요.'
  },
  tel: {
    required: '번호를 정확하게 입력해주세요',
    invalid: '사용할 수 없는 번호입니다.',
    regex: /^(01[0|1|6|7|8|9])(\d{4}|\d{3})(\d{4})$/
  },
  privacy: {
    required: '개인정보 수집 및 이용에 대한 안내 모두 동의해주세요.'
  }
});
