<template>
  <div class="works">
    <ul>
      <li v-for="work in works" :key="work._stem" @click="updateWork(work._stem)">
        <div class="screenshot"><NuxtImg :src="`works/${work._stem}.jpg`" /></div>
        <div class="logo"><NuxtImg :src="`${work._stem}.png`" /></div>
        <span class="title">{{ work.title }}</span>
      </li>
      <!-- <li v-for="work in works" :key="`${work._stem}-2`" @click="updateWork(work._stem)">
        <div class="screenshot"><NuxtImg :src="`works/${work._stem}.jpg`" /></div>
        <div class="logo"><NuxtImg :src="`${work._stem}.png`" /></div>
        <span class="title">{{ work.title }}</span>
      </li> -->
    </ul>
    <Transition name="work-panel">
      <ActiveWork 
        v-if="activeWork && work" 
        :work="work" 
        :activeWork="activeWork" 
        :updateWork="updateWork"
      />
    </Transition>
  </div>
</template>
<script setup lang="ts">
const { work, activeWork, updateWork } = useWorks()
const { data } = await useAsyncData(() => queryContent().find())
const works = (data.value || []).sort((a, b) => {
  if (a.order === undefined) return 1;
  if (b.order === undefined) return -1;
  return a.order - b.order;
});
</script>
<style lang="postcss">
.works {
  @apply py-4;

  @media (min-width: 1024px) {
    @apply min-h-dvh;
  }

  & > ul {
    @apply flex flex-col;

    & > li {
      @apply relative flex w-full mb-4 border-2 border-slate-300 cursor-pointer overflow-hidden;
      box-shadow: rgba(0, 0, 0, 0.6) 0px 15px 10px -10px;
      aspect-ratio: 1920 / 833;
      opacity: 0;
      transform: translateY(-1rem);
      animation: workEnter 0.75s cubic-bezier(0.65, 0, 0.35, 1) forwards;

      &:nth-of-type(1) { animation-delay: 0.5s }
      &:nth-of-type(2) { animation-delay: 0.65s }
      &:nth-of-type(3) { animation-delay: 0.75s }
      &:nth-of-type(4) { animation-delay: 0.85s }
      &:nth-of-type(5) { animation-delay: 0.95s }
      &:nth-of-type(6) { animation-delay: 1.05s }
      &:nth-of-type(7) { animation-delay: 1.1s }
      

      @media (min-width: 1024px) {
        @apply mb-8;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 15px 10px -10px;
      }

      &:before {
        @apply absolute top-0 left-0 w-full h-full z-10;
        content: "";
        background-color: rgba(0, 0, 0, 0.75);
      }

      &:hover {
        &:before {
          background-color: rgba(0, 0, 0, 0.15);
        }

        .screenshot img {
          animation: flashWork 0.75s infinite step-end;
        }

        .logo img {
          @apply mix-blend-difference;
        }
      }

      .screenshot {
        @apply relative w-full;

        img {
          @apply absolute top-0 left-0 w-auto h-full max-w-none;
          animation: flashWork 0.75s infinite step-end;

          @media (min-width: 1024px) {
            animation: none;
          }
        }
      }

      .logo {
        @apply absolute w-full h-full flex justify-center items-center z-10;
      }
      
      .title {
        @apply hidden absolute top-1/2 left-1/2 z-20 text-slate-100;
        transform: translate(-50%, -50%);
      }
    }
  }
}

.work-panel-enter-active,
.work-panel-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.work-panel-enter-from,
.work-panel-leave-to {
  @apply opacity-0;
  transform: translateX(2rem);

  @media (min-width: 1024px) {
    /* transform: translateX(3rem) scale(1.1); */
  }
}

@keyframes workEnter {
  from { transform: translateY(-1rem); opacity: 0; }
  to { transform: translateY(0rem); opacity: 1; }
}

@keyframes flashWork {
  0% { transform: translateX(0%) }
  20% { transform: translateX(-20%) }
  40% { transform: translateX(-40%) }
  60% { transform: translateX(-60%) }
  80% { transform: translateX(-80%) }
}
</style>