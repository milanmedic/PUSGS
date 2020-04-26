<template>
  <div id="not-found-page">
    <figure>
      <img src="@/assets/notFound.svg" alt="Not Found" />
      <figcaption>
        <h2>
          The page you're looking for doesn't exist.
          <br />
          <small>Or does it?</small>
        </h2>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style>
#not-found-page {
  background: url("https://www.wallpaperup.com/uploads/wallpapers/2012/10/14/19257/f3f1dcc53bb7c1c84bd2b2b29caca52a.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 95%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#not-found-page figure {
  width: 100%;
  height: 100%;
}

#not-found-page figure img {
  width: 100%;
  height: 80%;
}

#not-found-page figure figcaption h2 {
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  color: white;
  opacity: 0.8;
}

#not-found-page figure figcaption h2 small {
  font-size: 0.8rem;
  font-weight: normal;
}
</style>