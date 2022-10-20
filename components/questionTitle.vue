<template>
  <div class="q-title">
    <label for="">Question title</label>
    <input class="question" type="text" name="" id="" v-model="title" />
  </div>
</template>

<script>
export default {
  name: "questionTitle",
};
</script>

<style>
.q-title {
  height: 4rem;
  background-color: aqua;
  margin-right: 2rem;
}
.question {
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 2rem;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 0.5rem;
  gap: 1rem;
}
</style>
