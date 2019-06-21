<template>
  <div class="about">
    <BarLine></BarLine>
  </div>
</template>

<script>
  import BarLine from '@/components/echarts/BarLine.vue'

  export default {
    name: 'about',
    components: {
      BarLine
    }
  }
</script>

<style lang="less" scoped>
  .about {
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    span {
      background-color: gainsboro;
      cursor: pointer;
    }
  }
</style>
