<template>
  <div id="home">
    <header class="home-header">
      <h1>Cuna Travel Services</h1>
    </header>
    <section class="home-search-services">
      <h2>Find The Best</h2>
      <BaseForm @submit.prevent="helloWorld" class="search-for-services-form">
        <template v-slot:formFields>
          <BaseSelect v-model="selectedOption" :options="options" />
        </template>
        <template v-slot:formButtons>
          <BaseButton type="submit" buttonClass="interaction-button"
            >Go!</BaseButton
          >
        </template>
      </BaseForm>
    </section>
    <RegisterBar />
  </div>
</template>

<script>
// @ is an alias to /src
import BaseButton from "@/components/BaseComponents/BaseButton.vue";
import BaseSelect from "@/components/BaseComponents/BaseSelect.vue";
import BaseForm from "@/components/BaseComponents/BaseForm.vue";
import RegisterBar from "@/components/SharedComponents/RegisterBar.vue";

export default {
  name: "Home",
  data() {
    return {
      selectedOption: "Flight Services",
      options: ["Flight Services", "Rent-A-Car Services"],
    };
  },
  methods: {
    helloWorld() {
      console.log("hello World");
    },
  },
  components: {
    BaseForm,
    BaseSelect,
    BaseButton,
    RegisterBar,
  },
};
</script>

<style scoped>
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  #home {
    margin: 10% 0 0 0;
    height: 90%;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
    justify-items: center;
  }

  .home-header h1 {
    font-weight: bold;
    font-size: 3rem;
    text-align: center;
    padding: 5% 0 0 0;
  }
  .home-search-services {
    width: 90%;
    padding: 10% 5% 0 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .home-search-services h2 {
    font-size: 2rem;
  }

  .search-for-services-form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80%;
    width: 100%;
    align-items: center;
  }

  .search-for-services-form :nth-child(2) {
    display: flex;
    justify-content: center;
  }
}
</style>
