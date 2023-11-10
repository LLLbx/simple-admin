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
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Form } from "ant-design-vue";
import { loginForm, loginFn } from "./login";

const { form, login } = loginFn();


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
  background-image: url("@/assets/img//back.jpg");
  object-fit: contain;
}
</style>
