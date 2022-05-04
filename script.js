const app = Vue.createApp({
  data() {
    return {
      // showPasswords: false,
      password1: "",
      password2: "",
      inputType: "password",
      minLength: 10,
    };
  },
  methods: {
    togglePasswords() {
      if (this.inputType === "password") {
        this.inputType = "text";
      } else {
        this.inputType = "password";
      }
    },
    updateChecks() {
      this.passwordsEqual = this.password1 === this.password2;
    },
  },
  computed: {
    passwordsEqual() {
      return this.password1 === this.password2;
    },
    hasMinLength() {
      return this.password1.length >= this.minLength;
    },
    hasNumbers() {
      return /\d/.test(this.password1);
    },
    containsUpperCase() {
      return this.password1;
      if (password1.value.toLowerCase() !== password1.value);
    },
    containsLowerCase() {
      return this.password1;
      if (password1.value.toUpperCase() !== password1.value);
    },
  },
});

app.mount("#app");
