<template>
  <div class="profile-page-header">
    <figure>
      <img src="@/assets/heroAvatar.svg" alt="heroAvatar" id="profile-picture" />
    </figure>
    <div class="basic-information">
      <h2 id="user-name">{{userData.name}}</h2>
      <h3 id="user-name">{{userData.username}}</h3>
      <p id="user-location">{{userData.location}}</p>
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
        username: "@kosovo1244",
        location: "Pambukovica, SFRJ",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis labore perferendis nostrum sit mollitia! Dolore, error doloribus possimus voluptatibus cumque illum quod ullam quas! Dolore magnam sapiente voluptas a odit."
      }
    };
  }
};
</script>

<style>
.profile-page-header {
  width: 95%;
  padding: 2.5%;
  height: 97.5%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 2fr;
  grid-gap: 5%;
  background-color: #6e89eb;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 8px;
}

.profile-page-header figure {
  width: 100%;
  height: 100%;
  grid-column: 1/2;
}
#profile-picture {
  max-width: 100%;
  max-height: 100%;
}
.basic-information {
  width: 97.5%;
  grid-column-start: 2;
  grid-column-end: 3;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 2.5%;
  box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 8px;
}

.basic-information > h2 {
  font-size: 1.2rem;
}

.basic-information > p,
.basic-information > h3 {
  color: rgba(0, 0, 0, 0.5);
}

.profile-description {
  width: 100%;
  grid-column: 1/3;
  grid-row: 2;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 8px;
}

.profile-description > p {
  font-size: 0.9rem;
  padding: 2.5%;
}
</style>