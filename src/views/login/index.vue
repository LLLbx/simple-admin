<template>
  <div class="login_page">
    <div>
      <Form>
        <a-form-item
          v-for="item in loginForm"
          :key="item.name"
          :label="item.label"
          :name="item.name"
          :rules="item.rules"
        >
          <a-input v-model:value="form[item.name]"/>
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
</style>
