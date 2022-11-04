<template>
  <section class="main">
    <div class="qs">{{ questions }}</div>
    <div class="qs" v-for="q in localqs" :key="q">
      <questionnew />
      {{ q }}
    </div>
  </section>
</template>

<script setup>
  import { useBlockStore } from "@/stores/questions";
  let BlockStore = useBlockStore();
  await BlockStore.load_questions();
  let existing_length = ref(BlockStore.current_length);
  watch(BlockStore, () => {
    existing_length.value = BlockStore.current_length;
  });
  let loaded_questios = ref(BlockStore.read_questions);
  let questions = loaded_questios.value;
  let localqs = ref(["one", "two"]);
  // TODO: build the functionality to add a new question block
  function push_to_store() {
    console.log("hi");
    BlockStore.add_question();
  }
</script>

<style scoped></style>
