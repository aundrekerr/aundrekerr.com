<template>
  <div class="name-lead">
    <div class="lead-wrap">
      <div class="profile">
        <NuxtImg src="buh.jpg" />
      </div>
      <div class="name-wrap">
        <h1>Aundre<br/>Kerr</h1>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="postcss">
.name-lead {
  @apply flex mt-24 mb-8;

  @media (min-width: 1024px) {
    @apply mx-8 my-0 h-dvh self-start flex items-center;
  }
}

.lead-wrap {
  @apply relative w-full flex;

  @media (min-width: 1024px) {
    @apply fixed;
  }
}

.profile {
  @apply max-w-[80px] mr-3 border-2 border-slate-300;

  img {
    @apply w-full h-full object-cover aspect-square;
  }
}

.name-wrap {
  h1 {
    @apply font-extrabold uppercase tracking-tighter text-slate-900;
    font-size: 3rem;
    line-height: 0.85;
  }
}
</style>