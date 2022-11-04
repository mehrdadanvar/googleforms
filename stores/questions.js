import { defineStore } from "pinia";

export const useBlockStore = defineStore("BlockStore", {
  state: () => ({
    questions: [],
  }),
  getters: {
    read_questions() {
      return this.questions;
    },
    current_length() {
      return this.questions.length;
    },
  },
  actions: {
    async load_questions() {
      let { data, error } = await useFetch("http://localhost:8000/");
      console.log("data", data);
      this.questions = data;
    },
    add_question() {
      let question = {
        id: (this.questions.current_length + 1).toString(),
        model: "multiple choice",
        title: "some title",
        description: "some description",
        choices: ["choice one", "choice two"],
      };
      this.questions.push(question);
      console.log("added one question", this.questions);
    },
  },
});
