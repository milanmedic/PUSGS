<template>
  <router-link :to="{name: 'Service Item', params: {serviceId: id, title: title }}">
    <div class="service-item">
      <figure class="service-avatar">
        <img src="@/assets/Avatar.png" />
      </figure>
      <div class="services-information">
        <h3>{{title}}</h3>
        <p>{{description}}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      requred: true
    },
    description: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.service-item {
  display: flex;
  width: 95%;
  padding: 2.5%;
  box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 8px;
  background-color: white;
  margin-bottom: 2.5%;
  max-height: 25%;
  border-radius: 10px;
  align-items: center;
  text-decoration: none;
}

.service-item:hover {
  transform: scale(105%);
}

.services-information {
  width: 70%;
  margin-left: 10%;
}

.services-information h3 {
  font-size: 1.5rem;
  border-bottom: 1px solid black;
  margin-bottom: 2.5%;
}

.services-information p {
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.9rem;
  overflow: hidden;
}

.service-avatar {
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.service-avatar img {
  width: 100%;
  height: 100%;
}
</style>