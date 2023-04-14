<script setup lang="ts">
interface Props {
  full?: boolean;
  title: string;
  body: string;
  buttons?: Array<string>;
}
defineProps<Props>();
</script>

<template>
  <div :class="['hero bg-base-200', { 'min-h-screen': full }]">
    <div class="hero-content text-center">
      <div class="max-w-[70vw] md:max-w-md">
        <h1 class="text-3xl md:text-5xl font-bold" v-html="title"></h1>
        <p class="py-6" v-html="body"></p>
        <ul class="menu menu-horizontal bg-base-100 rounded-box">
          <li v-for="button in buttons">
            <a class="hover:bg-base-200" @click="$emit('button', button)">{{
              button
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
