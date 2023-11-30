import { ref, reactive } from "vue";
import { FormItemProps } from "ant-design-vue";
import { customRef } from 'vue'
import { getTest } from "@/api/user";

type _Item = {
  key: string,
}

export const loginForm: (FormItemProps & _Item)[] = [
  {
    key: "username",
    label: "Username",
    name: "username",
    rules: [{ required: true, message: "Please input your username!" }],
  },
  {
    key: "password",
    label: "Password",
    name: "password",
    rules: [{ required: true, message: "Please input your password!" }],
  },
];

const defaultForm: Record<string, any> = {
  username: "",
  password: "",
};

export const loginFn = () => {
  const form = reactive(defaultForm);
  const login = () => {
    console.log(form);
    getTest()
  };
  return { form, login };
};

export function useDebouncedRef(value: any, delay = 200) {
  let timeout: any
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}