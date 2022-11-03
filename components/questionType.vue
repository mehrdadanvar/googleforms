<template>
  <div class="question-type">
    <label for="">Type</label>
    <select name="q-type" id="" v-model="choice" @change="updatechoice">
      <option v-for="option in options" :key="option">
        {{ option.type }}
      </option>
    </select>
  </div>
</template>

<script setup>
  import { useQstore } from "@/stores/qtypes";
  //:value="option.value"
  let Qstore = useQstore();
  console.log(Qstore.initial);
  let options = ref([
    { type: "multiple choice", value: "mc", selected: false },
    { type: "checkbox", value: "chb", selected: true },
    { type: "short answer", value: "sha", selected: false },
    { type: "paragraph", value: "para", selected: false },
    { type: "drop down", value: "dd", selected: false },
    { type: "date", value: "date", selected: false },
    { type: "time", value: "time", selected: false },
  ]);
  let choice = ref("");
  // watch(choice, () => {
  //   console.log("from watch", choice.value);
  // });
  function updatechoice() {
    // console.log("choice value is ", choice.value);
    Qstore.set_choice(choice.value);
    console.log("it is working and the value of choice is", choice.value);
    let user_choice = Qstore.report_user_choice;
    console.log(user_choice.value);

    // const userstate = useState("userstate", () => {
    //   return choice.value;
    // });
    // console.log("new use state is", userstate);
  }
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
    background-color: white;
    width: 15rem;
    height: 3rem;
    border-radius: 0.5rem;
    padding-left: 1rem;
    font-size: 16px;
  }
</style>
