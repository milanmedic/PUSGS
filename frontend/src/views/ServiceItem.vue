<template>
  <div class="service-item">
    <ServiceItemHeader />
  </div>
</template>

<script>
import ServiceItemHeader from "@/components/ServiceProfileComponents/ServiceItemHeader.vue";
export default {
  name: "Service Item",
  props: {
    serviceId: {
      type: Number,
      required: true
    }
  },
  components: {
    ServiceItemHeader
  }
};
</script>

<style scoped>
.service-item {
  position: relative;
  height: 90%;
  width: 95%;
  margin: 5% 2.5% 0 2.5%;
  display: grid;
  grid-template-rows: 30% 70%;
  grid-gap: 5%;
}
</style>