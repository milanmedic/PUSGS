<template>
  <div class="edit-profile-component">
    <div class="options-list">
      <EditItem
        v-for="item in items"
        :key="item.title"
        :optionName="item.title"
        :optionValue="item.value"
      />
    </div>
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
  height: 95%;
  overflow-x: scroll;
  width: 95%;
}

.options-list {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2.5%;
}
</style>