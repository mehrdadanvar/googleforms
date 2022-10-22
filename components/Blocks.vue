<template>
  <div>
    <button @click="add">add block</button>
    <section class="father" v-for="question in questions" :key="question">
      <Block>{{ question }}</Block>
    </section>
  </div>
</template>

<script>
  export default {
    setup() {
      let questions = ref(["one"]);
      function add() {
        questions.value.push("item");
      }
      return { questions, add };
    },
  };
</script>

<style></style>
