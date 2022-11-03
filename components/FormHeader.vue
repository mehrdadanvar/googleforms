<template>
  <div class="form-header">
    <input class="form-title" type="text" v-model="title" @keyup.enter="add" placeholder="Form Title" />
    <input
      class="form-discription"
      type="text"
      v-model="description"
      @keyup.enter="add"
      placeholder="Form Description"
    />
    <p>{{ title }}-{{ description }}</p>
  </div>
</template>

<script setup>
  let title = ref("");
  let description = ref("");
</script>

<style scoped>
  .form-header {
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    min-width: 50rem;
  }
  .form-title {
    background-color: white;
    height: 3.5rem;
    border-radius: 0.5rem;
    font-family: "Lato";
    padding-left: 2rem;
    font-size: 20px;
    color: grey;
    border: 1px solid #f77f00;
  }
  .form-title:hover {
    /* transition: 0.8s ease-in;
    border-bottom: 1px solid purple; */
  }
  .variable:focus {
    outline: none;
  }
  .form-discription {
    margin-top: 1rem;
    border: 1px solid #f77f00;
    background-color: white;
    height: 2.5rem;
    border-radius: 0.5rem;
    font-family: "Lato";
    padding-left: 2rem;
    border: none;
    font-size: 18px;
    color: grey;
  }
</style>
