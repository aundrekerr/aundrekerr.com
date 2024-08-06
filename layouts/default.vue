<template>
  <div class="wave__box">
    <div class='wave -one'></div>
    <div class='wave -two'></div>
    <div class='wave -three'></div>
  </div>
  <div class="site-container">
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
}
</script>

<style lang='postcss'>
.wave__box {
  @apply fixed top-0 left-0 w-4 h-full overflow-hidden;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.2);
  background: #fbfcee;
  transform: translate3d(0, 0, 0);
  
  &:after {
    @apply block top-0 left-0 w-full h-full z-10;
    content: '';
    background: linear-gradient(to bottom, #f5a700, rgba(221, 238, 255, 0) 80%, rgba(255, 255, 255, 0.5));
    transform: translate3d(0, 0, 0);
  }
}

.wave {
  @apply absolute top-[3%] left-1/2 w-[500px] h-[500px] mt-[-250px] ml-[-250px] opacity-80 bg-teal-600;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: drift 3000ms infinite linear;
}

.wave.-two {
  @apply opacity-10 bg-orange-400;
  animation: drift 7000ms infinite linear;
}

.wave.-three {
  animation: drift 5000ms infinite linear;
}

@keyframes drift {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.site-container {
  @apply mr-4;
  max-width: calc(100vw - 2rem);

  main {
    @apply flex justify-center items-center max-w-[1200px] mx-auto;

    @media (min-width: 1024px) {
      @apply min-h-dvh;
    }
  }
}
</style>