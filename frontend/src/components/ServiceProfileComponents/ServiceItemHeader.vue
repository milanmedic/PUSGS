<template>
  <div class="service-header">
    <h2 class="service-title">Cuna Travel</h2>
    <address class="service-address">Vojvode Mutivode bb</address>
    <p class="service-rating">
      <img src="@/assets/star.svg" /> 6/10
    </p>
    <p
      class="service-description"
    >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non aspernatur eligendi quisquam maiores. Pariatur numquam libero eligendi tenetur error, optio blanditiis reiciendis dolores inventore recusandae repudiandae quasi consectetur totam corrupti!</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.service-header {
  display: grid;
  grid-template-areas:
    "title title"
    "location rating"
    "description description";
  grid-gap: 2.5%;
  background: #6e89eb;
  border-radius: 5px;
  padding: 2.5%;
  box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 8px;
}

.service-description,
.service-address,
.service-rating,
.service-title {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 8px;
}

.service-description {
  grid-row-start: description-start;
  grid-row-end: description-start;
  grid-column-start: description-start;
  grid-column-end: description-end;
  padding: 2.5%;
}

.service-address {
  grid-row-start: location-start;
  grid-row-end: location-start;
  grid-column-start: location-start;
  grid-column-end: location-end;
}

.service-rating {
  grid-row-start: rating-start;
  grid-row-end: rating-start;
  grid-column-start: rating-start;
  grid-column-end: rating-end;
}

.service-title {
  grid-row-start: title-start;
  grid-row-end: title-start;
  grid-column-start: title-start;
  grid-column-end: title-end;
  font-size: 2rem;
}
</style>