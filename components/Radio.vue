<template>
  <div class="gender">
    <div>
      <h4>Gender</h4>
    </div>
    <div class="radio-item">
      <input type="radio" name="gender" value="male" v-model="item" />
      <label for="">male</label>
    </div>
    <div class="radio-item">
      <input type="radio" name="gender" value="female" v-model="item" />
      <label for="">female</label>
    </div>
    <div class="radio-item">
      <input type="radio" name="gender" value="none" v-model="item" />
      <label for="">non-binary</label>
    </div>
    <p>{{ item }}</p>
  </div>
</template>

<script setup>
  let item = ref("");
  console.log(item.value);
</script>

<style>
  .radio-item {
    display: flex;
    gap: 0.5rem;
  }
  input {
    width: 1.2rem;
  }
</style>
