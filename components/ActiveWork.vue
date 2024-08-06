<template>
  <div ref="activeWorkRef" class="active-work">
    <div class="sticky top-0 w-full flex justify-end">
      <a class="close" @click="updateWork(false)" />
    </div>
    <div class="work-lead">
      <a :href="work.url" target="_blank" rel="noreferrer"><span>{{ work.url }}</span></a>
      <h2>{{ work.title }}</h2>
      <ul>
        <li v-for="t in work.tech" :key="t"><span>{{ t }}</span></li>
      </ul>
    </div>
    <ContentRenderer :key="work._id" :value="work" class="active-work-content" />
  </div>
</template>
<script setup lang="ts">
import { onClickOutside, type OnClickOutsideHandler } from '@vueuse/core'
import type { ParsedContent } from "@nuxt/content"
const props = defineProps<{ work: ParsedContent, activeWork: string | boolean, updateWork: Function }>()
const activeWorkRef = ref<HTMLElement | null>(null)
onClickOutside(activeWorkRef, () => props.updateWork(false))
</script>
<style lang="postcss">
.active-work {
  @apply fixed top-0 left-4 z-50 w-full h-full text-zinc-300 bg-slate-950 px-8 py-4 overflow-y-scroll;
  width: calc(100dvw - 1rem);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 15px 30px 20px;

  @media (min-width: 1024px) {
    @apply fixed top-0 left-[50dvw] w-[50dvw];
  }

  .close {
    @apply relative inline-flex justify-center items-center w-8 h-8 text-2xl rounded-full bg-[#f5a700] text-slate-950 cursor-pointer;

    &:before {
      @apply absolute top-1/2 left-1/2;
      content: "×";
      transform: translate(calc(-50% + 1px), calc(-50% - 3px));
    }

    &:hover {
      @apply bg-zinc-300;
    }
  }
}

.work-lead {
  @apply flex flex-col mb-8;

  a {
    @apply mb-2;

    &:hover span {
      @apply text-slate-300;
    }

    & span{
      @apply flex items-center gap-1;

      &:before {
        @apply text-xl;
        content: '⮫';
      }
    }  
  }

  h2 {
    @apply font-extrabold uppercase tracking-tighter text-3xl;
    line-height: 0.85;
  }

  ul {
    @apply inline-flex gap-2 mt-4;

    li {
      @apply inline-flex justify-between items-center text-center;

      &:after {
        @apply ml-2 text-[10px];
        content: '❖';
      }
      
      &:last-of-type:after {
        @apply hidden;
      }
    }
  }

  span {
    @apply inline-flex text-xs text-slate-500;
  }
}

.active-work-content {
  @apply text-base;

  @media (min-width: 1024px) {
    @apply text-xl;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-body font-bold uppercase tracking-widest;
  }

  p {
    @apply mx-0 mb-4;
  }

  ul {
    @apply ml-4 mb-4;
    list-style-type: circle;
  }

  img {
    @apply border-2 border-slate-800 mt-16 mx-auto;
  }

  img + em {
    @apply inline-flex justify-center w-full mx-auto not-italic text-sm text-center;
  }

  hr {
    @apply my-8 border-zinc-300;
  }
}
</style>