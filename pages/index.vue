<template>
  <div class="home">
    <NameLead />
    <Works />
  </div>
</template>
<script></script>
<style lang="postcss">
.home {
  @apply flex flex-col w-full;

  @media (min-width: 1024px) {
    @apply grid grid-cols-2 items-center;
  }
}
</style>