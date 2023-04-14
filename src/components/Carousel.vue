<template>
  <div
    class="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box mx-6"
  >
    <div v-for="(item, index) in items" :key="index" class="carousel-item">
      <QuoteCard
        :reference="item.reference"
        :body="item.body"
        :link="item.link"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import QuoteCard from "./QuoteCard.vue";
interface Item {
  reference: string;
  body: string;
  link?: string;
}
const { items } = defineProps<{ items: Array<Item> }>();
</script>
