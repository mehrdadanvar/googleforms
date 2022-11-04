<template>
  <section class="qnew">
    <div class="question">
      <questionHead />
      <div class="qbody">
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
    </div>
    <div class="side">
      <div class="side-container">
        <div class="icons">
          <img src="@/assets/icons/add.svg" alt="" width="36" @click="push_to_store" />
          <img src="@/assets/icons/minus.svg" alt="" width="36" />
          <img src="@/assets/icons/logo.svg" alt="" width="36" />
        </div>
      </div>
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
  // TODO: build the functionality to add a new question block
  function push_to_store() {
    console.log("hi");
    BlockStore.add_question();
  }
</script>

<style scoped>
  .qnew {
    display: flex;
    align-items: center;
  }
  .qbody {
    margin: 2rem 1rem;
  }
  .question {
    min-width: 20rem;
    max-width: 70rem;
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
  .side {
    background-color: #ffffff;
    padding: 1rem 0;
    border-radius: 1rem;
    height: 10rem;
  }
  .icons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    cursor: pointer;
    border-radius: 50%;
  }
  img:active {
    background-color: red;
  }
</style>
