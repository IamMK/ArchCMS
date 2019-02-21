<template>
  <form class="login">
    <input type="text" class="login__input" name="username" placeholder="Email" v-model="email">
    <input
      type="password"
      class="login__input"
      name="password"
      placeholder="Password"
      v-model="password"
    >
    <button type="submit" class="login__button" @click="login">Login</button>
  </form>
</template>

<style lang="scss">
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;

  &__input {
    border: none;
    border-bottom: 2px solid #133342;
    width: 200px;
    transition: 0.3s;
    text-align: center;
    padding: 10px;
    &:focus {
      border-bottom-color: #ff6d37;
      padding: 15px;
    }
  }

  &__button {
    width: 200px;
    margin: 5px;
    background-color: #133342;
    color: #ff6d37;
    border: none;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    &:after {
      content: ">>";
      opacity: 0;
      visibility: collapse;
      font-size: 0;
      transition: 0.3s;
    }
    &:hover::after {
      opacity: 1;
      visibility: visible;
      font-size: 1em;
      margin-left: 5px;
    }
  }
}
</style>

<script>
import firebase from "firebase";

export default {
  name: "loginForm",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function(event) {
      event.preventDefault();
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            this.$router.replace("about");
          },
          function(err) {
            alert(
              "Upps... sth went wrong. It's DUPA! Strange code:<br>" +
                err.message
            );
          }
        );
    }
  }
};
</script>

