<template>
  <main class="parent">
    <slot />
  </main>
</template>

<script>
  export default {};
</script>

<style>
  .parent {
    display: flex;
    flex-direction: column;
    width: 50rem;
    border: 1px solid green;
  }
</style>
