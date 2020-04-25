<template>
  <div class="find-friends-component">
    <BaseForm class="find-friends-form" @submit.prevent="findFriend">
      <template v-slot:formFields>
        <BaseInput type="text" v-model="name" placeholder="Username" />
      </template>
      <template v-slot:formButtons>
        <BaseButton type="submit" buttonClass="interaction-button submit-button search-button">
          <img src="@/assets/search.svg" />
        </BaseButton>
      </template>
    </BaseForm>
    <ProfileList :friends="friends" />
  </div>
</template>

<script>
import BaseForm from "@/components/BaseComponents/BaseForm.vue";
import BaseInput from "@/components/BaseComponents/BaseInput.vue";
import BaseButton from "@/components/BaseComponents/BaseButton.vue";
import ProfileList from "@/components/UserProfileComponents/ProfileList.vue";
export default {
  data() {
    return {
      name: "",
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
    BaseForm,
    BaseInput,
    BaseButton,
    ProfileList
  },
  methods: {
    findFriend() {
      console.log("Find Friend");
    }
  }
};
</script>

<style>
.find-friends-component {
  display: flex;
  flex-direction: column;
  background-color: #6e89eb;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 8px;
  width: 95%;
  height: 95%;
  padding: 2.5%;
}

.find-friends-form {
  display: flex;
  background: white;
  border-radius: 5px;
  justify-content: space-around;
  align-items: center;
  padding: 1.5%;
  height: 10%;
}

.find-friends-form div {
  width: 70%;
}

.search-button {
  width: 20%;
  height: 90%;
  padding: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-button > img {
  width: 80%;
  height: 80%;
}
</style>