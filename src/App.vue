<template>
    <div id="app">
        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        name: 'app',
        mounted() {
        }
    }
</script>

<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        text-align: center;
        min-width: 1200px;
    }
</style>
