<template>
    <div class="index" id="index">
        <Header></Header>
        <div class="main">
            <MenuGroup></MenuGroup>
            <router-view class="content"></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/public/Header.vue'
    import Footer from '@/components/public/Footer.vue'
    import MenuGroup from '@/components/public/MenuGroup.vue'

    export default {
        name: "index",
        components: {
            Header, Footer, MenuGroup
        },

    }
</script>

<style lang="less" scoped>

</style>
<style lang="less">
    #index {
        height: 100%;
        display: flex;
        flex-direction: column;

        .main {
            flex: 1;
            display: flex;
            background-color: rgba(28, 59, 114, 1);
            height: calc(100% - 150px);

            .content {
                flex: 1;
            }
        }
    }
</style>
