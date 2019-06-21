<template>
  <div class="hello"></div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    // msg: String
  },
  methods: {
    // goFn() {
    //   this.$router.push('/about')
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .hello {
    background-color: red;

    .helloMessage {
      background-color: pink;
    }
  }
</style>
<style lang="less" scoped>
  .hello {
    width: 80%;
    margin: auto;

    .el-button, .el-button:hover, .el-button:focus {
      /*background-color: white;*/
      /*border: none;*/
      color: seagreen;
    }

    .helloMessage {
      width: 50%;
      margin: inherit;
    }
  }
</style>
