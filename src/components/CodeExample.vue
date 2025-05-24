<template>
  <section class="code-example">
    <h3 class="title">
      Passed props
    </h3>
    <pre class="code"><code>{{ props }}</code></pre>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  datePickerProps: IDatePickerProps
}>()

</script>

<style lang="scss" scoped>
  .code-example {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 16px;
    border: 1px solid black;
    border-radius: 8px;
    min-width: 320px;
    animation: 1 0.5s fade-in;
    background-color: white;
  }


  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(120px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
