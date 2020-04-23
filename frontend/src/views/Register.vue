<template>
  <div id="registration-page">
    <section id="registration-page-header">
      <h2>Register Account</h2>
    </section>
    <BaseForm @submit.prevent="registerUser" @reset="reset" class="registration-form">
      <template v-slot:formFields>
        <div class="form-input-fields">
          <BaseInput label="Email" type="email" v-model="formData.email" />
          <BaseInput label="Password" type="password" v-model="formData.password" />
          <BaseInput label="Confirm Password" type="password" v-model="formData.confirmPassword" />
          <BaseInput label="Name" type="text" v-model="formData.name" />
          <BaseInput label="Username" type="text" v-model="formData.username" />
          <BaseInput label="Location" type="text" v-model="formData.location" />
        </div>
      </template>
      <template v-slot:formButtons>
        <div class="registration-form-buttons">
          <BaseButton
            type="submit"
            buttonClass="submit-button"
            id="registration-register-button"
          >Register!</BaseButton>
          <BaseButton
            type="reset"
            buttonClass="reset-button"
            id="registration-register-button"
          >Reset</BaseButton>
        </div>
      </template>
    </BaseForm>
  </div>
</template>

<script>
import BaseForm from "@/components/BaseComponents/BaseForm.vue";
import BaseButton from "@/components/BaseComponents/BaseButton.vue";
import BaseInput from "@/components/BaseComponents/BaseInput.vue";
export default {
  name: "Register", //if we don't declare it. Vue Devtols will denote it as a Anonymous Component
  data() {
    return {
      formData: {
        name: "",
        password: "",
        confirmPassword: "",
        email: "",
        username: "",
        location: ""
      }
    };
  },
  methods: {
    registerUser() {
      console.log("Register!");
    },
    reset() {
      this.formData = {
        name: "",
        password: "",
        confirmPassword: "",
        email: "",
        username: "",
        location: ""
      };
    }
  },
  components: {
    BaseForm,
    BaseInput,
    BaseButton
  }
};
</script>

<style>
#registration-page {
  position: relative;
  height: 90%;
  width: 95%;
  margin: 10% 2.5% 0 2.5%;
  display: grid;
  grid-template-rows: 0.5fr 4fr 0.5fr;
}

#registration-page-header {
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
}

.registration-form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-input-fields {
  padding: 5%;
  border-radius: 5px;
  background-color: #6e89eb;
  color: white;
  margin-bottom: 20%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.registration-form-buttons {
  display: flex;
  height: 20%;
  width: 100%;
  justify-content: space-around;
  align-content: center;
}

#registration-register-button,
#registration-reset-button {
  width: 40%;
  height: 50%;
  padding: 0%;
}
</style>