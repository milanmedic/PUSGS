<template>
  <div class="friends-list-component">
    <FriendsListItem v-for="item in friends" :key="item" :friendName="item" />
  </div>
</template>

<script>
import FriendsListItem from "@/components/UserProfileComponents/FriendsListItem.vue";
export default {
  data() {
    return {
      friends: [
        "Isus",
        "BataZivojinovic",
        "Kosovo1244",
        "Spajdermen",
        "Betmen",
        "PajaPatak",
        "Gusar",
        "Seselj",
        "Tita",
        "Vila"
      ]
    };
  },
  components: {
    FriendsListItem
  }
};
</script>

<style>
.friends-list-component {
  background-color: #6e89eb;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  padding: 2.5%;
}
</style>