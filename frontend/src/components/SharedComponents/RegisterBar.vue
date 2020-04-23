<template>
  <section class="home-register-section">
    <h3>Don't have an account?</h3>
    <router-link :to="{ name: 'Register' }">
      <BaseButton type="submit" buttonClass="interaction-button"
        >Register</BaseButton
      >
    </router-link>
  </section>
</template>

<script>
import BaseButton from "@/components/BaseComponents/BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
};
</script>

<style scoped>
.home-register-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

.home-register-section h3 {
  font-size: 1.2rem;
  margin: 0 0 15% 0;
}

.home-register-section a {
  text-align: center;
  width: 100%;
}
</style>
