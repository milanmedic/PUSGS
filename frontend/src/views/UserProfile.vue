<template>
  <BaseProfile class="user-profile">
    <template v-slot:profileHeader>
      <ProfilePageHeader />
    </template>
    <template v-slot:tabMenu>
      <div>Tab Menu</div>
    </template>
    <template v-slot:tabList>
      <div>Tab List</div>
    </template>
  </BaseProfile>
</template>

<script>
import BaseProfile from "@/components/BaseComponents/BaseProfile.vue";
import ProfilePageHeader from "@/components/SharedComponents/ProfilePageComponents/ProfilePageHeader.vue";
export default {
  name: "UserProfile",
  components: {
    BaseProfile,
    ProfilePageHeader
  }
};
</script>

<style>
.user-profile {
  position: relative;
  height: 90%;
  width: 95%;
  margin: 10% 2.5% 0 2.5%;
  display: grid;
  grid-template-rows: 2fr 1fr 3fr;
  grid-gap: 5%;
}
</style>