<template>
  <div>
    <button v-on="$listeners" v-bind="$attrs" class="button" :class="buttonClass">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    buttonClass: {
      type: String
    }
  }
};
</script>

<style>
.submit-button {
  padding: 5% 15%;
  font-size: 1.2rem;
  background-color: #6e89eb;
  color: white;
  border-radius: 5px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 8px;
}
button:active {
  color: red;
  box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 2px;
}
</style>