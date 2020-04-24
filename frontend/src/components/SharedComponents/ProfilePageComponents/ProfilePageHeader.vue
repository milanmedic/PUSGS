<template>
  <div class="profile-page-header">
    <figure>
      <img src="@/assets/heroAvatar.svg" alt="heroAvatar" />
    </figure>
    <div class="basic-information">
      <p id="user-name">{{userData.name}}</p>
      <p id="user-location">{{userData.description}}</p>
    </div>
    <div class="profile-description">
      <p class="user-description">{{userData.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: "Luke Skywalker",
        location: "Pambukovica, SFRJ",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis labore perferendis nostrum sit mollitia! Dolore, error doloribus possimus voluptatibus cumque illum quod ullam quas! Dolore magnam sapiente voluptas a odit."
      }
    };
  }
};
</script>

<style>
</style>