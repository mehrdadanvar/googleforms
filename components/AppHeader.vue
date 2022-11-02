<template>
  <header class="header">
    <div class="app-header">
      <img src="@/assets/icons/logo.svg" alt="" width="100" />
      <h1>Google Forms</h1>
      <h2>Build, Edit and Publish your Forms</h2>
      <Navbar />
    </div>
  </header>
</template>

<script>
  export default {};
</script>

<style scoped>
  .header {
    margin: 1rem auto;
  }
  .app-header {
    display: flex;
    flex-direction: column;
    background-image: url("../assets/icons/header.svg");
    background-repeat: no-repeat;
    min-width: 100rem;
    color: white;
    padding: 2rem;
    height: 30rem;
  }
  h2 {
    color: #fca311;
  }
  img {
    filter: invert(100%);
  }
</style>
