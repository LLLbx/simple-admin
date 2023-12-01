<template>
  <div class="login_page">
    <div class="back_img">
    </div>
    <div>
      <Form :model="form">
        <a-form-item
          v-for="item in loginForm"
          v-bind="item"
        >
          <a-input v-model:value="form[item.key]"/>
        </a-form-item>
      </Form>
      <a-button @click="login">submit</a-button>

      <input type="text" v-model="text1">
      <span :key="text1">{{ text1 }}</span>
      <Transition>
        <span :key="text1">{{ text1 }}</span>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Form } from "ant-design-vue";
import { loginForm, loginFn } from "./login";
import { ref, version } from "vue";

console.log(version);

const { form, login } = loginFn();

const text1 = ref(1)

const aa = async () => {
  await new Promise((res) => {
    setTimeout(() => res(100), 10000)
  })
  
}

aa()
</script>

<style lang="scss" scoped>

.login_page {
  width: 100vw;
  height: 100vh;
  display: flex;
}

.back_img {
  height: 100vh;
  width: 50%;
  background-image: url("@/assets/img/background2.jpeg");
  object-fit: contain;
}
</style>
