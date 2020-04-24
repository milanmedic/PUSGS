<template>
  <nav id="profile-tabs-navigation">
    <ul id="tab-navigation-items">
      <li class="tab-navigation-item" v-for="tab in tabs" :key="tab.id">
        <router-link :to="{name: tab.title}">{{tab.title}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
#profile-tabs-navigation {
  background-color: #6e89eb;
  width: 95%;
  height: 95%;
  padding: 2.5%;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 8px;
}

#tab-navigation-items {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  height: 100%;
}
a {
  text-decoration: none;
  padding: 2.5%;
}

a:visited {
  color: none;
}

.tab-navigation-item {
  background-color: white;
  border-radius: 5px;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
}
</style>