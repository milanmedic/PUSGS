<template>
  <div class="friends-list-item">
    <div class="item-information">
      <figure class="friend-avatar">
        <img src="@/assets/maleAvatar.svg" alt="Friend Avatar" />
      </figure>
      <p class="friend-username">{{friendName}}</p>
    </div>
    <div class="item-actions">
      <template v-if="type === 'friend-request'">
        <BaseButton buttonClass="action-button">
          <img src="@/assets/add.svg" alt="Add" />
        </BaseButton>
        <BaseButton buttonClass="action-button">
          <img src="@/assets/delete.svg" alt="Delete" />
        </BaseButton>
      </template>
      <template v-else-if="type === 'accepted-request'">
        <BaseButton buttonClass="action-button">
          <img src="@/assets/delete.svg" alt="Delete" />
        </BaseButton>
      </template>
      <template v-else>
        <BaseButton buttonClass="action-button">
          <img src="@/assets/add.svg" alt="Add" />
        </BaseButton>
      </template>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseComponents/BaseButton.vue";
export default {
  props: {
    friendName: {
      type: String,
      required: true
    },
    type: {
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
.friends-list-item {
  width: 95%;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1.5%;
  border-radius: 5px;
  max-height: 15%;
  padding: 2.5%;
}

.item-information {
  max-width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  min-width: 60%;
}

.item-actions {
  display: flex;
  max-width: 30%;
  height: 80%;
  justify-content: flex-end;
  min-width: 20%;
}

.friend-avatar {
  width: 40%;
  height: 90%;
  display: flex;
}
.friend-username {
  width: 70%;
}
</style>