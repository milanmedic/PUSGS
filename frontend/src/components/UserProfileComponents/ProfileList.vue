<template>
  <div class="profile-list">
    <FriendsListItem v-for="item in friends" :key="item" :friendName="item" />
  </div>
</template>

<script>
import FriendsListItem from "@/components/UserProfileComponents/FriendsListItem.vue";
export default {
  props: {
    friends: {
      type: Array,
      required: true
    }
  },
  components: {
    FriendsListItem
  }
};
</script>

<style>
.profile-list {
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