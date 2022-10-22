<template>
  <div class="home">
    <AppHeader />
    <Block>
      <FormHeader />
    </Block>
    <Block>
      <h3>Form Builder</h3>
      <div class="head">
        <QuestionTitle />
        <questionType />
      </div>
      <div class="body">
        <MasterRadio />
      </div>
      <!-- <Radio /> -->
      <div class="footer">footer</div>
    </Block>
    <SideUtil />
    <Blocks />
  </div>
</template>

<script setup>
  let name = "index";
  let title = ref("");

  //'monospace', monospace
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid rgb(189, 189, 189);
    border-radius: 1rem;
    background-color: white;
    padding: 1rem;
  }
  .head {
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid grey;
    padding: 1rem;
  }
  .body {
    margin: 5rem;
    border-bottom: 2px solid grey;
  }
</style>
