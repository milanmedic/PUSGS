<template>
  <nav id="navigation">
    <ul class="menu">
      <li class="logo">
        <router-link :to="{ name: 'Home' }">Logo</router-link>
      </li>
      <li class="item" @click="toggleMenu">
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li class="item" @click="toggleMenu">
        <router-link :to="{ name: 'Profile' }">Profile</router-link>
      </li>
      <li class="item" @click="toggleMenu">
        <router-link :to="{ name: 'Register' }">Register</router-link>
      </li>
      <li class="item" @click="toggleMenu">
        <router-link :to="{ name: 'Login' }">Login</router-link>
      </li>
      <li class="toggle" id="menu-icon" @click="toggleMenu">
        <img src="@/assets/menu.svg" alt="hamburger icon" />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleMenu(event) {
      let lis = document.querySelectorAll(".item");
      lis.forEach(item => item.classList.toggle("active"));
    }
  }
};
</script>

<style scoped>
.item > a {
  display: inline-block;
  width: 100%;
  height: 100%;
}

#navigation {
  height: 5%;
  width: 100%;
}
/* Basic styling */
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  font-family: sans-serif;
  background: #f1f1f1;
}
nav {
  background: #6e89eb;
}
ul {
  list-style-type: none;
  z-index: 10;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.logo a:hover {
  text-decoration: none;
}
.menu li {
  font-size: 16px;
  padding: 15px 5px;
  white-space: nowrap;
}
.logo a,
.toggle a {
  font-size: 20px;
}
/* Mobile menu */
.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 100;
  background: #6e89eb;
  width: 100%;
}
.toggle {
  order: 1;
}
.item.button {
  order: 2;
}
.item {
  width: 100%;
  text-align: center;
  order: 3;
  display: none;
}
.item:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
.item.active {
  display: block;
}
#menu-icon {
  margin-right: 5%;
  padding: 0px;
  cursor: pointer;
}
.logo {
  margin-left: 5%;
  padding-bottom: 0;
}
/* Desktop menu */
@media all and (min-width: 900px) {
  .item {
    display: block;
    width: auto;
  }
  .toggle {
    display: none;
  }
  .logo {
    order: 0;
  }
  .item {
    order: 1;
  }
  .button {
    order: 2;
  }
  .menu li {
    padding: 15px 10px;
  }
  .menu li.button {
    padding-right: 0;
  }
}
</style>
