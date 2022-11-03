import { defineStore } from "pinia";

export const useBlockStore = defineStore("BlockStore", {
  state: () => ({
    questions: [],
  }),
  getters: {
    read_questions() {
      return this.questions;
    },
  },
  actions: {
    async load_questions() {
      let { data, error } = await useFetch("http://localhost:8000/");
      console.log("data", data);
      this.questions = data;
    },
  },
});
