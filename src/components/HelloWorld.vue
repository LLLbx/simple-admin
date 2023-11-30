<template>
    <input type="text">
</template>

<script setup lang="ts">
import { useUserStore } from "@/store"

const userStore = useUserStore();

userStore.$patch({
    name: ''
})
</script>