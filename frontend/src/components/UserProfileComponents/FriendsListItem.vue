<template>
  <div class="friends-list-item">
    <figure class="friend-avatar">
      <img src="@/assets/maleAvatar.svg" alt="Friend Avatar" />
    </figure>
    <p class="friend-username">{{friendName}}</p>
  </div>
</template>

<script>
export default {
  props: {
    friendName: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.friends-list-item {
  width: 90%;
  background-color: white;
  padding: 2.5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1.5%;
  border-radius: 5px;
  max-height: 15%;
}

.friend-avatar {
  width: 20%;
  height: 90%;
  display: flex;
}
.friend-username {
  width: 70%;
}
</style>