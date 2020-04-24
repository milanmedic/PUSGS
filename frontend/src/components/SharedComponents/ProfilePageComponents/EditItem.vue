<template>
  <div class="edit-profile-item">
    <p class="option-name">{{optionName}}</p>
    <p class="option-value">{{optionValue}}</p>
    <BaseButton buttonClass="interaction-button edit-button">Edit</BaseButton>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseComponents/BaseButton.vue";
export default {
  props: {
    optionName: {
      type: String,
      required: true
    },
    optionValue: {
      type: String,
      required: true
    }
  },
  components: {
    BaseButton
  }
};
</script>

<style>
.edit-profile-item {
  width: 95%;
  padding: 0% 2.5%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
  border-radius: 5px;
  height: 15%;
  max-height: 15%;
  min-height: 5%;
  margin-bottom: 2%;
  font-size: 0.9rem;
}

.option-value {
  color: rgba(0, 0, 0, 0.5);
}
</style>