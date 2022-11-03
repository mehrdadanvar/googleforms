<template>
  <div class="home">
    <AppHeader />
    <FormHeader />
    <questionrender />
    <SideUtil />
  </div>
</template>

<script setup>
  //'monospace', monospace
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid rgb(189, 189, 189);
    border-radius: 1rem;
    background-color: white;
    padding: 1rem;
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
