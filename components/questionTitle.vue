<template>
  <div class="q-title">
    <label for="">Title</label>
    <input class="question" type="text" name="" id="" placeholder="type your title" />
  </div>
</template>

<script>
  export default {
    name: "questionTitle",
  };
</script>

<style scoped>
  .q-title {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-right: 2rem;
  }
  .question {
    width: 30rem;
    height: 3rem;
    border: 1px solid rgb(211, 211, 211);
    border-radius: 0.5rem;
    gap: 1rem;
    padding-left: 1rem;
    font-family: "Lato";
    font-size: 18px;
  }
</style>
