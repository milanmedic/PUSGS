<template>
  <div class="edit-profile-component">
    <EditItem
      v-for="item in items"
      :key="item.title"
      :optionName="item.title"
      :optionValue="item.value"
    />
  </div>
</template>

<script>
import EditItem from "@/components/SharedComponents/ProfilePageComponents/EditItem.vue";
export default {
  data() {
    return {
      items: [
        {
          title: "Name",
          value: "Luke Skywalker"
        },
        {
          title: "Email",
          value: "visasila@gmail.com"
        },
        {
          title: "Password",
          value: "**********"
        },
        {
          title: "Location",
          value: "Pambukovica, SFRJ"
        }
      ]
    };
  },
  components: {
    EditItem
  }
};
</script>

<style>
.edit-profile-component {
  background-color: #6e89eb;
  border-radius: 5px;
  padding: 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 8px;
}
</style>