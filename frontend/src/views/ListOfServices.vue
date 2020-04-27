<template>
  <div class="list-of-services-component">
    <header class="list-of-services-component-header">
      <h2>List of {{serviceType}}</h2>
    </header>
    <div class="services-listing">
      <div class="list-of-services">
        <ServiceListItem
          v-for="service in services"
          :key="service.title"
          :title="service.title"
          :description="service.description"
          :id="service.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ServiceListItem from "@/components/ServiceProfileComponents/ServiceListItem.vue";
export default {
  name: "ServicesList",
  data() {
    return {
      services: [
        {
          id: 1,
          title: "Big Cuna Erlajnz",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae alias eligendi aliquid quasi quaerat minus laudantium aperiam similique! Placeat excepturi ipsa provident voluptate et, esse sequi odit. Fugiat, ex!"
        },
        {
          id: 2,
          title: "Pandur Erlajnz",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae alias eligendi aliquid quasi quaerat minus laudantium aperiam similique! Placeat excepturi ipsa provident voluptate et, esse sequi odit. Fugiat, ex!"
        },
        {
          id: 3,
          title: "Mala Macka Erlajnz",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae alias eligendi aliquid quasi quaerat minus laudantium aperiam similique! Placeat excepturi ipsa provident voluptate et, esse sequi odit. Fugiat, ex!"
        },
        {
          id: 4,
          title: "Djokovic Erlajnz",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae alias eligendi aliquid quasi quaerat minus laudantium aperiam similique! Placeat excepturi ipsa provident voluptate et, esse sequi odit. Fugiat, ex!"
        },
        {
          id: 5,
          title: "Gospodar Vucic Erlajnz",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae alias eligendi aliquid quasi quaerat minus laudantium aperiam similique! Placeat excepturi ipsa provident voluptate et, esse sequi odit. Fugiat, ex!"
        },
        {
          id: 6,
          title: "Ko nas zavadi Erlajnz",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae alias eligendi aliquid quasi quaerat minus laudantium aperiam similique! Placeat excepturi ipsa provident voluptate et, esse sequi odit. Fugiat, ex!"
        }
      ]
    };
  },
  props: {
    serviceType: {
      type: String,
      required: true
    }
  },
  components: {
    ServiceListItem
  }
};
</script>

<style scoped>
header {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.list-of-services-component {
  position: relative;
  height: 90%;
  width: 95%;
  margin: 5% 2.5% 0 2.5%;
  display: grid;
  grid-template-rows: 1fr 9fr;
}

.services-listing {
  height: 98%;
  border-radius: 10px;
  background-color: #6e89eb;
  overflow-x: scroll;
  padding: 2.5%;
  box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 8px;
  z-index: 1;
}

.list-of-services {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>