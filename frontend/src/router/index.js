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
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/profile/username", //it will dynamic when we create an API
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "userProfile" */ "../views/UserProfile.vue"),
    children: [
      {
        path: "editprofile",
        name: "Edit Profile",
        component: () =>
          import(
            /* webpackChunkName: "editProfile" */ "@/components/SharedComponents/ProfilePageComponents/EditProfile.vue"
          ),
      },
      {
        path: "friendsList",
        name: "Friends List",
        component: () =>
          import(
            /* webpackChunkName: "friendsList" */ "@/components/UserProfileComponents/FriendsList.vue"
          ),
      },
      {
        path: "findfriends",
        name: "Find Friends",
        component: () =>
          import(
            /* webpackChunkName: "findFriends" */ "@/components/UserProfileComponents/FindFriends.vue"
          ),
      },
    ],
  },
  {
    path: "/404",
    alias: "*",
    name: "NotFound",
    component: () =>
      import(
        /* webpackChunkName: "notFound" */
        "@/views/NotFound.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
