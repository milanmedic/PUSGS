<template>
  <div id="login-page">
    <section id="login-page-header">
      <h2>Login</h2>
    </section>
    <BaseForm @submit.prevent="login" class="login-form">
      <template v-slot:formFields>
        <div id="login-form-fields">
          <BaseInput
            label="Username"
            type="text"
            v-model="loginData.username"
          />
          <BaseInput
            label="Password"
            type="password"
            v-model="loginData.password"
          />
        </div>
      </template>
      <template v-slot:formButtons>
        <BaseButton buttonClass="submit-button interaction-button" type="submit"
          >Login</BaseButton
        >
      </template>
    </BaseForm>
    <RegisterBar />
  </div>
</template>

<script>
import BaseForm from "@/components/BaseComponents/BaseForm.vue";
import BaseInput from "@/components/BaseComponents/BaseInput.vue";
import BaseButton from "@/components/BaseComponents/BaseButton.vue";
import RegisterBar from "@/components/SharedComponents/RegisterBar.vue";
export default {
  name: "Login",
  data() {
    return {
      loginData: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      console.log("Login");
    },
  },
  components: {
    BaseForm,
    BaseInput,
    BaseButton,
    RegisterBar,
  },
};
</script>

<style scoped>
#login-page {
  position: relative;
  height: 90%;
  width: 95%;
  margin: 10% 2.5% 0 2.5%;
  display: grid;
  grid-template-rows: 10% 60% 30%;
}

#login-page-header {
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
}

.login-form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

#login-form-fields {
  padding: 5%;
  border-radius: 5px;
  background-color: #6e89eb;
  color: white;
  margin-bottom: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 85%;
}
</style>
