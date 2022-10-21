<template>
  <div class="question-type">
    <label for="">Question Type</label>
    <select name="q-type" id="">
      <option value="">multiple choice</option>
      <option value="">checkbox</option>
      <option value="short-answer">short-answer</option>
      <option value="paragraph">paragraph</option>
      <option value="checkbox">checkbox</option>
      <option value="dropdown">dropdown</option>
      <option value="Date">date</option>
      <option value="time">time</option>
    </select>
  </div>
</template>

<script></script>

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
