<template>
  <div class="question-type">
    <label for="">Question Type</label>
    <select name="q-type" id="" v-model="optionresult">
      <option :value="option.value" v-for="option in options" :key="option">
        {{ option.type }}
      </option>
      <!-- <option value="">multiple choice</option>
      <option value="short-answer">short-answer</option>
      <option value="paragraph">paragraph</option>
      <option value="checkbox">checkbox</option>
      <option value="dropdown">dropdown</option>
      <option value="Date">date</option>
      <option value="time">time</option> -->
    </select>
    <p>mehrdad + {{ optionresult }}</p>
  </div>
</template>

<script setup>
  let options = ref([
    { type: "multiple choice", value: "mc" },
    { type: "checkbox", value: "chb" },
    { type: "short answer", value: "sha" },
    { type: "paragraph", value: "para" },
    { type: "drop down", value: "dd" },
    { type: "date", value: "date" },
    { type: "time", value: "time" },
  ]);
  let optionresult = ref("");
</script>

<style>
  * {
    font-family: "Lato";
  }
  .question-type {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  select {
    border: 1px solid rgb(211, 211, 211);
    background-color: white;
    width: 15rem;
    height: 3rem;
    border-radius: 0.5rem;
  }
</style>
