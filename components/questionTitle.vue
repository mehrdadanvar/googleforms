<template>
  <div class="q-title">
    <label for="">Question title</label>
    <input class="question" type="text" name="" id="" />
  </div>
</template>

<script>
  export default {
    name: "questionTitle",
  };
</script>

<style scoped>
  .q-title {
    height: 4rem;
    margin-right: 2rem;
  }
  .question {
    width: 30rem;
    height: 2.25rem;
    border: 1px solid rgb(211, 211, 211);
    border-radius: 0.5rem;
    gap: 1rem;
    padding-left: 1rem;
    font-family: "Lato";
  }
</style>
