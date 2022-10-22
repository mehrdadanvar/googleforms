<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script>
  export default {
    props: ["text"],
  };
</script>

<style>
  .btn {
    border: none;
    width: 6rem;
    padding: 1rem;
    background-color: #14213d;
    color: #e5e5e5;
  }
  .btn:hover {
    border-radius: 0.5rem;
  }
</style>
