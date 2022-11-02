import { defineStore } from "pinia";

export const useStore = defineStore("main", () => {
  const count = ref(0);
  const name = ref("Eduardo");
  return { count, name };
});
