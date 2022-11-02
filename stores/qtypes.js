import { defineStore } from "pinia";

export const useQstore = defineStore("Qstore", {
  state: () => ({
    types: ["mc", "chb", "sha", "para", "dd", "date", "time"],
    initial: "mc",
    user_choice: ref(""),
  }),
  getters: {
    load_initial(state) {
      return state.initial;
    },
    report_user_choice(state) {
      console.log("hello from reporting the choice");
      return state.user_choice;
    },
  },
  actions: {
    set_choice(option) {
      this.user_choice = option;
      console.log("hello from the set choice");
    },
  },
});
