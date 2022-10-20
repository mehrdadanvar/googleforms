<template>
  <div class="home">
    <div class="container">
      <div class="head">
        <QuestionTitle />
        <questionType />
      </div>
      <div class="body"></div>
      <div class="footer">footer</div>
    </div>
  </div>
</template>

<script setup>
  let name = "index";
  let title = ref("");

  //'monospace', monospace
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    width: 60rem;
    height: 20rem;
    border: 1px solid grey;
    border-radius: 2rem;
    background-color: white;
    padding: 2rem;
  }
  .head {
    display: flex;
    flex-direction: row;
  }
</style>
