<template>
  <header>
    <div class="app-header">
      <img src="../assets/icons/logo.svg" alt="" width="100" />
      <h1>Google Forms</h1>
      <h2>Build, Edit and Publish your Forms</h2>
    </div>
  </header>
</template>

<script>
  export default {};
</script>

<style>
  .app-header {
    display: flex;
    flex-direction: column;
    background: url("../assets/icons/header.svg");
    min-width: 100rem;
    color: white;
    padding: 1rem;
  }
  h2 {
    color: #fca311;
  }
  img {
    filter: invert(100%);
  }
</style>
