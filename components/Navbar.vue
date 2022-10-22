<template>
  <nav class="navbar">
    <NuxtLink to="/" class="nav-item">Home</NuxtLink>
    <NuxtLink to="/test" class="nav-item">Test</NuxtLink>
  </nav>
</template>

<script>
  export default {};
</script>

<style>
  .navbar {
    display: flex;
    gap: 1rem;
    color: white;
    align-items: center;
    justify-content: center;
  }
  .nav-item {
    color: white;
    text-decoration: none;
    font-size: 20px;
  }
  .nav-item:hover {
    transition: 0.2s font-size ease-in;
    font-size: 22px;
    background-color: white;
  }
</style>
