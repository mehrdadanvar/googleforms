<template>
  <div class="end">
    <div class="img-container">
      <img src="../assets/icons/copy.svg" alt="" width="24" />
    </div>
    <div class="img-container">
      <img src="../assets/icons/bagcross.svg" alt="" width="24" />
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .end {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: flex-end;
    border-top: 1px solid grey;
  }
  .img-container {
    cursor: pointer;
    padding: 1rem;
    border-radius: 50%;
  }
  .img-container:hover {
    transition: 0.3s background-color ease-in;
    background-color: #e5e5e5;
  }
</style>
