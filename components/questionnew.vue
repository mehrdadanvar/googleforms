<template>
  <section class="question">
    <questionHead />
    <div class="body">
      <div class="components">
        <MC v-if="user_choice === 'multiple choice'" />
        <shortanswer v-if="user_choice === 'short answer'" />
        <paragraph v-if="user_choice === 'paragraph'" />
      </div>
    </div>
    <div class="tail">
      <questionFooter />
      <p>Current length is {{ existing_length }}</p>
    </div>
  </section>
</template>

<script setup>
  import { useQstore } from "@/stores/qtypes";
  import { useBlockStore } from "@/stores/questions";
  let Qstore = useQstore();
  let user_choice = ref("");
  watch(Qstore, () => {
    // console.log("watch from qrenderer is working", Qstore.report_user_choice);
    user_choice.value = Qstore.report_user_choice;
  });
  // Section related to existing questions and generating a new one
  let BlockStore = useBlockStore();
  await BlockStore.load_questions();
  let existing_length = ref(BlockStore.current_length);
  watch(BlockStore, () => {
    existing_length.value = BlockStore.current_length;
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
