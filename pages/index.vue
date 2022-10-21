<template>
  <div class="home">
    <div class="container">
      <div class="head">
        <QuestionTitle />
        <questionType />
      </div>
      <div class="body">
        <MasterRadio />
      </div>
      <!-- <Radio /> -->
      <div class="footer">footer</div>
    </div>
  </div>
</template>

<script setup>
  let name = "index";
  let title = ref("");

  //'monospace', monospace
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    width: 60rem;
    height: 30rem;
    border: 1px solid grey;
    border-radius: 2rem;
    background-color: white;
    padding: 2rem;
  }
  .head {
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid grey;
    padding: 1rem;
  }
  .body {
    margin: 5rem;
    border-bottom: 2px solid grey;
  }
</style>
