<template>
  <BaseProfile class="user-profile">
    <template v-slot:profileHeader>
      <ProfilePageHeader />
    </template>
    <template v-slot:tabMenu>
      <ProfileTabsNav :tabs="tabs" />
    </template>
    <template v-slot:tabList>
      <router-view :key="$route.path"></router-view>
    </template>
  </BaseProfile>
</template>

<script>
import BaseProfile from "@/components/BaseComponents/BaseProfile.vue";
import ProfilePageHeader from "@/components/SharedComponents/ProfilePageComponents/ProfilePageHeader.vue";
import ProfileTabsNav from "@/components/SharedComponents/ProfilePageComponents/ProfileTabsNav.vue";
export default {
  name: "UserProfile",
  data() {
    return {
      tabs: [
        {
          id: 1,
          routeName: "EditProfile",
          title: "Edit Profile"
        },
        {
          id: 2,
          routeName: "FriendsList",
          title: "Friends List"
        },
        {
          id: 3,
          routeName: "FindFriends",
          title: "Find Friends"
        },
        {
          id: 4,
          routeName: "PendingRequests",
          title: "Pending Requests"
        }
      ]
    };
  },
  components: {
    BaseProfile,
    ProfilePageHeader,
    ProfileTabsNav
  }
};
</script>

<style>
.user-profile {
  position: relative;
  height: 90%;
  width: 95%;
  margin: 5% 2.5% 0 2.5%;
  display: grid;
  grid-template-rows: 30% 5% 55%;
  grid-gap: 5%;
}
</style>