<template>
  <div class="home">
    <BaseInput label="Name" v-model="name" type="text" placeholder="Name" class="field" />
  </div>
</template>

<script>
// @ is an alias to /src
import BaseInput from "@/components/BaseComponents/BaseInput.vue";

export default {
  name: "Home",
  components: {
    BaseInput
  }
};
</script>
