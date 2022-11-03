<template>
  <section class="question">
    <questionHead />
    <div class="body">
      <div class="components">
        <MC v-if="user_choice === 'multiple choice'" />
        <shortanswer v-if="user_choice === 'short answer'" />
      </div>
    </div>
    <div class="tail">
      <questionFooter />
    </div>
  </section>
</template>

<script setup>
  import { useQstore } from "@/stores/qtypes";
  let Qstore = useQstore();
  console.log("from rendere");
  let user_choice = ref("");
  watch(Qstore, () => {
    user_choice.value = Qstore.report_user_choice.value;
  });
</script>

<style scoped>
  .body {
    margin: 2rem 1rem;
  }
  .question {
    min-width: 20rem;
    max-width: 60rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 2px dotted grey;
    background-color: white;
    border-radius: 1rem;
  }
</style>
