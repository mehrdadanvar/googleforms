<template>
  <div class="json_test">
    <div class="mehrdad" v-for="q in questions" :key="q"></div>
  </div>
</template>

<script setup>
  // import { useBlockStore } from "@/stores/questions";
  // let BlockStore = useBlockStore();
  // await BlockStore.load_questions();
  // let loaded_questios = ref(BlockStore.read_questions);
  // let questions = loaded_questios.value;
  // console.log("from the component", questions);
</script>

<style></style>
