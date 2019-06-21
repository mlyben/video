<template>
    <aside class="wrapper" ref="wrapper">
        <ul>
            <li :key="index" v-for="(item,index) in aaqa">
                <span @click="tt(item.path,index)">{{item.meta.title}}</span>
<!--                <transition name="slide-fade">-->
                    <div :class=" index===thatIndex? 'open':'close' " v-for="each in item.children"
                         v-if="item.children!==null">
                    <span @click="qq(each.path)" style="background-color: deepskyblue">
                        {{each.meta.title}}
                    </span>
                        <!--
                        <div :class=" index===thatIndex? 'open':'close' " v-for="each in item.children"
                            v-if="item.children!==null">
                            <span @click="qq(each.path)" style="background-color: deepskyblue">
                                {{each.meta.title}}
                            </span>
                        </div>
                        -->
                    </div>
<!--                </transition>-->
            </li>
            <!--            补位-->
            <div style="height: 100%"></div>
        </ul>
    </aside>
</template>

<script>
    import aaqa from '@/routerData.js'
    // import BScroll from 'better-scroll'
    export default {
        name: "MenuGroup",
        data() {
            return {
                aaqa,
                thatIndex: 0
            }
        },
        methods: {
            tt(path, index) {
                // console.log(path);
                this.$router.push({path: path})
                let thatIndex = index
                this.open(thatIndex)
            },
            qq(path) {
                this.$router.push({path: path})
            },
            open(index) {
                console.log(index);
                this.thatIndex = index
            }
        },
        mounted() {
            // let wrapper = this.$refs.wrapper
            // new BScroll(wrapper)
            this.$router.push({path: '/index'})
        }
    }
</script>

<style lang="less" scoped>
    aside {
        width: 183px;
        /*// 将滚动条去除*/
        overflow: hidden;
        position: relative;

        ul {
            width: 200px;
            height: 100%;
            background-color: rgba(34, 66, 123, 1);
            overflow: auto;
            /*// 导航栏预留空间*/
            box-sizing: border-box;
            /*// 谷歌去掉滚动条的方法:*/
            /*&::-webkit-scrollbar{display: none}*/

            li {
                list-style: none;
                box-sizing: border-box;
                padding-top: 5px;
                cursor: pointer;

                span {
                    display: inline-block;
                    width: 100%;
                    background-color: rgba(3, 66, 141, 1);
                    color: #FFFFFF;
                }
            }
        }

        .open {
            display: block;
            padding-top: 5px;
            /*opacity: 1;*/
        }

        .close {
            display: none;
            /*opacity: 0;*/
        }
    }
</style>
