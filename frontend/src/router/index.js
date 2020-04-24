import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/profile/username", //it will dynamic when we create an API
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UserProfile.vue"),
    children: [
      {
        path: "editprofile",
        name: "Edit Profile",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/components/SharedComponents/ProfilePageComponents/EditProfile.vue"
          ),
      },
      {
        path: "friendsList",
        name: "Friends List",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/components/UserProfileComponents/FriendsList.vue"
          ),
      },
      {
        path: "findfriends",
        name: "Find Friends",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/components/UserProfileComponents/FindFriends.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
