<template>
  <section class="question">
    <div class="head">
      <questionTitle />
      <questionType />
    </div>
    <div class="body">
      <MasterRadio />
    </div>
    <div class="tail">tail</div>
  </section>
</template>

<script>
  export default {};
</script>

<style scoped>
  .head {
    display: flex;
    border-bottom: 1px solid red;
  }
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
