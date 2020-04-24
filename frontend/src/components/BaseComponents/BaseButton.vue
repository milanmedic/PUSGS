<template>
  <button v-on="$listeners" v-bind="$attrs" class="button" :class="buttonClass">
    <slot />
  </button>
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
button {
  outline: none;
}
.interaction-button {
  padding: 5% 15%;
  font-size: 1.2rem;
  background-color: #6e89eb;
  color: white;
  border-radius: 5px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 8px;
}
.reset-button {
  background-color: #e24e42;
}

.submit-button {
  background-color: #008f95;
}

.invalid-input,
.invalid-input:active {
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: none;
}

button:active {
  box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 2px;
}
</style>
