import { defineStore } from "pinia";

export const useQstore = defineStore("Qstore", {
  state: () => ({
    // types: ["mc", "chb", "sha", "para", "dd", "date", "time"],
    initial: "multiple choice",
    user_choice: ref(""),
  }),
  getters: {
    load_initial(state) {
      return state.initial;
    },
    report_user_choice(state) {
      let reactive_choice = state.user_choice;
      return reactive_choice;
    },
  },
  actions: {
    set_choice(option) {
      this.user_choice = option;
    },
  },
});
