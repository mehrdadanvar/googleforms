<template>
  <div class="bucket">
    <slot />
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .bucket {
    display: flex;
    flex-direction: column;
    border-top: 1px solid red;
  }
</style>
