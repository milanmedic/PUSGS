<template>
  <div class="pending-requests-component">
    <ProfileList :friends="requests" type="friend-request" />
  </div>
</template>

<script>
import ProfileList from "@/components/UserProfileComponents/ProfileList.vue";
export default {
  data() {
    return {
      requests: [
        "Isus",
        "BataZivojinovic",
        "Kosovo1244",
        "Spajdermen",
        "Betmen",
        "Paja Patak",
        "Gusar",
        "Seselj",
        "Tita"
      ]
    };
  },
  components: {
    ProfileList
  }
};
</script>

<style>
.pending-requests-component {
  background-color: #6e89eb;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  padding: 2.5%;
  box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 8px;
}
</style>