<template>
  <section class="block">
    <slot />
  </section>
</template>

<script>
  export default {};
</script>

<style scoped>
  .block {
    min-width: 20rem;
    max-width: 50rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 2px dotted grey;
    background-color: white;
    border-radius: 1rem;
  }
</style>
