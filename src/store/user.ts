import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("$user", () => {
    const name = ref<string>("");

    const getUserName = () => {
        return name
    }

    const setUserName = (value: string) => {
        name.value = value
    }
  
    return { name, getUserName, setUserName };
  });


