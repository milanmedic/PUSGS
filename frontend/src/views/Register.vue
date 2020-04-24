<template>
  <div id="registration-page">
    <section id="registration-page-header">
      <h2>Register Account</h2>
    </section>
    <BaseForm @submit.prevent="registerUser" @reset="reset" class="registration-form">
      <template v-slot:formFields>
        <div class="form-input-fields">
          <BaseInput
            label="Email"
            type="email"
            v-model="$v.formData.email.$model"
            @blur="$v.formData.email.$touch()"
          />
          <template v-if="$v.formData.email.$dirty && $v.formData.email.$error">
            <p class="input-error">Email has to look like ***@***.com.</p>
          </template>
          <template v-if="$v.formData.email.$dirty && !$v.formData.email.required">
            <p class="input-error">Email field is required.</p>
          </template>
          <BaseInput
            label="Password"
            type="password"
            v-model="$v.formData.password.$model"
            @blur="$v.formData.password.$touch()"
          />
          <template v-if="$v.formData.password.$dirty && $v.formData.password.$error">
            <p class="input-error">Password has to have minimum 10 characters.</p>
          </template>
          <template v-if="$v.formData.password.$dirty && !$v.formData.password.required">
            <p class="input-error">Password field is required.</p>
          </template>
          <BaseInput
            label="Confirm Password"
            type="password"
            v-model="$v.formData.confirmPassword.$model"
            @blur="$v.formData.confirmPassword.$touch()"
          />
          <template v-if="$v.formData.confirmPassword.$dirty && $v.formData.confirmPassword.$error">
            <p class="input-error">Passwords have to match.</p>
          </template>
          <template
            v-if="$v.formData.confirmPassword.$dirty && !$v.formData.confirmPassword.required"
          >
            <p class="input-error">Confirm Password field is required.</p>
          </template>
          <BaseInput
            label="Name"
            type="text"
            v-model="$v.formData.name.$model"
            @blur="$v.formData.name.$touch()"
          />
          <template v-if="$v.formData.name.$dirty && $v.formData.name.$error">
            <p class="input-error">Name can contain only letters.</p>
          </template>
          <template v-if="$v.formData.name.$dirty && !$v.formData.name.required">
            <p class="input-error">Name field is required.</p>
          </template>
          <BaseInput
            label="Username"
            type="text"
            v-model="$v.formData.username.$model"
            @blur="$v.formData.username.$touch()"
          />
          <template v-if="$v.formData.username.$dirty && !$v.formData.username.maxLength">
            <p class="input-error">Username dield can contain max 30 characters</p>
          </template>
          <template v-if="$v.formData.username.$dirty && !$v.formData.username.required">
            <p class="input-error">Username field is required.</p>
          </template>
          <BaseInput
            label="Location"
            type="text"
            v-model="$v.formData.location.$model"
            @blur="$v.formData.location.$touch()"
          />
          <template v-if="$v.formData.location.$dirty && !$v.formData.location.maxLength">
            <p class="input-error">Location field can contain max 30 characters</p>
          </template>
          <template v-if="$v.formData.location.$dirty && !$v.formData.location.required">
            <p class="input-error">Location field is required.</p>
          </template>
        </div>
      </template>
      <template v-slot:formButtons>
        <div class="registration-form-buttons">
          <BaseButton
            type="submit"
            :disabled="$v.$invalid"
            :buttonClass="buttonClasses"
            id="registration-register-button"
          >Register!</BaseButton>
          <BaseButton
            type="reset"
            buttonClass="interaction-button reset-button"
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
import {
  required,
  email,
  alpha,
  minLength,
  maxLength,
  sameAs
} from "vuelidate/lib/validators";
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
  validations: {
    formData: {
      name: {
        required,
        alpha
      },
      password: {
        required,
        minLength: minLength(10)
      },
      confirmPassword: {
        required,
        sameAs: sameAs("password")
      },
      email: {
        required,
        email
      },
      username: {
        required,
        maxLength: maxLength(30)
      },
      location: {
        required,
        maxLength: maxLength(30)
      }
    }
  },
  computed: {
    buttonClasses() {
      if (this.$v.$invalid) {
        return "submit-button interaction-button invalid-input";
      }
      return "submit-button interaction-button";
    }
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

<style scoped>
#registration-page {
  position: relative;
  height: 90%;
  width: 95%;
  margin: 10% 2.5% 0 2.5%;
  display: grid;
  grid-template-rows: 0.5fr 9fr 0.5fr;
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
  justify-content: space-around;
  align-items: center;
}

.form-input-fields {
  padding: 5%;
  border-radius: 5px;
  background-color: #6e89eb;
  color: white;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 8px;
}

.registration-form-buttons {
  display: flex;
  height: 20%;
  width: 100%;
  justify-content: space-around;
  align-content: center;
  align-items: center;
}

#registration-register-button,
#registration-reset-button {
  width: 40%;
  height: 50%;
  padding: 0%;
}
</style>
