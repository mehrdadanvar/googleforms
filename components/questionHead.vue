<template>
  <div class="question-head">
    <questionTitle />
    <questionType @sendup="somemethod" />
    <p>mehrdad says {{ child }}</p>
  </div>
</template>

<script>
  export default {
    setup() {
      let child = ref("something");
      function somemethod() {
        console.log(sendup);
      }
      return {
        child,
        somemethod,
      };
    },
  };
</script>

<style>
  .question-head {
    display: flex;
    margin-bottom: 1rem;
    border-bottom: 1px dashed grey;
    gap: 1rem;
  }
</style>
