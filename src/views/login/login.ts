import { ref, reactive } from "vue";
import { FormItemProps } from "ant-design-vue";

export const loginForm: FormItemProps[] = [
  {
    label: "Username",
    name: "username",
    rules: [{ required: true, message: "Please input your username!" }],
  },
  {
    label: "Password",
    name: "password",
    rules: [{ required: true, message: "Please input your password!" }],
  },
];

const defaultForm = {
  username: "",
  password: "",
};

export const loginFn = () => {
  const form = reactive(defaultForm);
  const login = () => {
    console.log(form);
    
  }
  return { form, login };
};
