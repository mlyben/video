<template>
    <div class="home" ref="home">
        <img alt="Vue logo" src="@/assets/logo.png">
        <router-view></router-view>
    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        components: {
            // HelloWorld
        },
        mounted() {
        },
        methods: {}
    }
</script>
<style lang="less" scoped>

</style>
