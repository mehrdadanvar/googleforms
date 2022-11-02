<template>
  <div class="store">
    <h1>this is the stores mehrdad</h1>
    <p>my name is {{ name }}</p>
    <p>{{ mainStore.count }}</p>
  </div>
</template>

<script setup>
  import { useStore } from "@/stores/main.js";

  // export default {
  //   // type inference enabled
  //   setup() {
  //     // type: string | undefined
  //     let name = ref("mehrdad");
  //     let mainStore = useStore();
  //     console.log(mainStore.count);
  //     return {
  //       name,
  //       mainStore,
  //     };
  //   },
  // };
  let name = ref("mehrdad");
  let mainStore = useStore();
  console.log(mainStore.count);
</script>

<style></style>
