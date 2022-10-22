<template>
  <div class="question-type">
    <label for="">Type</label>
    <select name="q-type" id="" v-model="optionresult" :required="true">
      <option selected="true">multiple choice</option>
      <option v-for="option in options" :value="option.value" :key="option">
        {{ option.type }}
      </option>
    </select>
  </div>
</template>

<script setup>
  let options = ref([
    { type: "multiple choice", value: "mc", selected: true },
    { type: "checkbox", value: "chb", selected: false },
    { type: "short answer", value: "sha", selected: false },
    { type: "paragraph", value: "para", selected: false },
    { type: "drop down", value: "dd", selected: false },
    { type: "date", value: "date", selected: false },
    { type: "time", value: "time", selected: false },
  ]);
  let optionresult = ref("");
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
  }
</style>
