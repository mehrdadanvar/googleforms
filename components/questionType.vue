<template>
  <div class="question-type">
    <label for="">Type</label>
    <select name="q-type" id="" v-model="choice" @change="sendup(choice)">
      <option v-for="option in options" :value="option.value" :key="option">
        {{ option.type }}
      </option>
    </select>
    <p></p>
  </div>
</template>

<script>
  import { store } from "../store/store.js";
  export default {
    setup(context) {
      let options = ref([
        { type: "multiple choice", value: "mc", selected: true },
        { type: "checkbox", value: "chb", selected: false },
        { type: "short answer", value: "sha", selected: false },
        { type: "paragraph", value: "para", selected: false },
        { type: "drop down", value: "dd", selected: false },
        { type: "date", value: "date", selected: false },
        { type: "time", value: "time", selected: false },
      ]);
      let choice = ref("");
      let sendup = (choice) => {
        context.emit("mehrdad", choice);
      };
      return {
        options,
        choice,
        sendup,
        store,
      };
    },
  };
</script>

<style>
  * {
    font-family: "Lato";
  }
  .question-type {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 18px;
  }
  select {
    border: 1px solid rgb(211, 211, 211);
    background-color: white;
    width: 15rem;
    height: 3rem;
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: 14px;
  }
</style>
