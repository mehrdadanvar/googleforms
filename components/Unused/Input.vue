<template>
  <div class="input-container">
    <input class="input" type="text" />
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .input-container {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    color: #003049;
  }
  .input {
    border: 1px solid rgb(205, 205, 205);
    height: 2.5rem;
    min-width: 15rem;
    border-radius: 0.5rem;
    padding-left: 1rem;
    font-size: 18px;
  }
  .input:focus {
    outline: none !important;
    color: #003049;
  }
</style>
