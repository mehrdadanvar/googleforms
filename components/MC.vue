<template>
  <div class="component">
    <div class="heading">
      <label>Add Options</label>
      <input class="variable" type="text" v-model="newresult" @keyup.enter="add" />
      <button @click="add">
        <img src="@/assets/icons/add.svg" alt="" />
      </button>
    </div>
    <div class="radio-item" v-for="(item, index) in resultset" :key="item">
      <input class="radio" type="radio" name="name" v-model="radiovalue" :value="item" />
      <label for="">{{ item.content }}</label>
      <button @click="minus(index)"><img src="@/assets/icons/minus.svg" alt="" /></button>
    </div>
    <button @click="save_changes">save changes</button>
  </div>
</template>

<script setup>
  let resultset = ref([]);
  let newresult = ref("");
  function add() {
    resultset.value.push({ id: resultset.value.length, content: newresult.value });
    newresult.value = "";
  }

  let radiovalue = ref("");
  console.log();
  function minus(index) {
    console.log(resultset.value);
    resultset.value.splice(index, 1);
    console.log(resultset.value);
  }
</script>

<style scoped>
  .heading {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  .variable {
    border: 1px solid rgb(211, 211, 211);
    background-color: white;
    width: 15rem;
    height: 2.5rem;
    border-radius: 0.5rem;
  }
  .radio {
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid red;
    color: blueviolet;
  }
  .radio-item {
    margin: 0;
    display: flex;
    flex-direction: row;
    margin-bottom: 0.5rem;
    align-items: center;
  }
</style>
