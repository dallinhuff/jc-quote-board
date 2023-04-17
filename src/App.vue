<script setup lang="ts">
import { nextTick, ref } from "vue";
import Hero from "./components/Hero.vue";
import Carousel from "./components/Carousel.vue";
import { ScriptureList } from "./scriptures";

const overview = ref<HTMLElement | null>(null);
const messiah = ref<HTMLElement | null>(null);
const man = ref<HTMLElement | null>(null);
const divine = ref<HTMLElement | null>(null);
const current = ref<string>("overview");
const refs = { overview, messiah, man, divine };

const handleButton = (name: string) => {
  const norm = name.toLowerCase();
  current.value = norm;
  // @ts-ignore
  nextTick(() => refs[norm].value.$el.scrollIntoView({ behavior: "smooth" }));
};

const scriptures = ref(ScriptureList);
</script>

<template>
  <Transition name="head">
    <Hero
      v-if="current === 'overview'"
      class="fixed z-40"
      ref="overview"
      full
      title="The Jesus<span class='text-secondary'>(es)</span> of the Gospels"
      body="A showcase of Jesus the Messiah, the Man, and the Divine as documented by the Gospel & other New Testament authors"
      :buttons="['Messiah', 'Man', 'Divine']"
      @button="handleButton"
    />
  </Transition>
  <div v-if="current !== 'overview'">
    <div class="flex justify-center sticky top-4 z-40">
      <ul class="menu menu-horizontal bg-base-100 rounded-box">
        <li v-for="button in ['Overview', 'Messiah', 'Man', 'Divine']">
          <a class="hover:bg-base-200" @click="handleButton(button)">{{
            button
          }}</a>
        </li>
      </ul>
    </div>
    <Hero
      class="pt-36"
      ref="messiah"
      title="Jesus the Messiah"
      body="The Lord's Anointed, foretold by His prophets"
    />
    <Carousel :items="scriptures.messiah" />
    <Hero
      class="pt-36"
      ref="man"
      title="Jesus the Man"
      :body="`<p>A teacher, healer, prophet, <em>human</em></p>`"
    />
    <Carousel :items="scriptures.man" />
    <Hero
      class="pt-36"
      ref="divine"
      title="Jesus the Divine"
      body="ה‎ו‎ה‎י‎ Himself, made flesh"
    />
    <Carousel :items="scriptures.divine" />
  </div>
</template>

<style scoped>
.head-enter-active,
.head-leave-active {
  transition: opacity 0.5s ease;
}

.head-enter-from,
.head-leave-to {
  opacity: 0;
}
</style>
