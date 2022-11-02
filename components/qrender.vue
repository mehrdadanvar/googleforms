<template>
  <div class="render">
    <p>qustion renderer</p>
    <div class="components">
      <MC />
      <shortanswer />
    </div>
  </div>
</template>

<script setup>
  import { useQstore } from "@/stores/qtypes";
  let Qstore = useQstore();
  function choicewatch() {
    // console.log("choice value is ", choice.value);
    let user_choice = Qstore.report_user_choice;
    console.log(user_choice);
  }
  choicewatch();
  //   watch:{
  //     watched(newvalue){
  //         console.log(newvalue)
  //     }
  //   }
</script>

<style></style>
