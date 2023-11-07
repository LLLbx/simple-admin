<script setup lang="ts">
// import c1 from "./components/c1";
// import { form1 } from "@/pages/form1";

// const { arr: arr1, serch, searchForm, columns } = form1();
// console.log(columns, 'columns');

</script>

<template>
  <!-- <c1 :tagData="arr1" @search="serch" :searchForm="searchForm" :columnForm="columns" /> -->
  <RouterView/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
