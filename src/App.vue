<script setup lang="ts">
import Hero from "./components/Hero.vue";
const print = () => console.log("hello");
</script>

<template>
  <Hero
    title="Hi there"
    body="A wall of text"
    button-text="word"
    @action="print"
  />
  <Hero title="Hi there" body="a bigger wall of text" button-text="hi" />
  <Hero title="Hi you" body="not much to see here" button-text="work" />
  <Hero title="bruv" body="right on" button-text="wild" />
</template>
