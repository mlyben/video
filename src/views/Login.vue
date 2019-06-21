<template>
    <div class="login">
        <form action="">
            <div>
                <label for="userName">用户名 : </label>
                <input id="userName" name="userName" type="text">
            </div>
            <div>
                <label for="passWord">用户名 : </label>
                <input id="passWord" name="passWord" type="text">
            </div>
            <div>
                <label for="code">用户名 : </label>
                <input id="code" name="code" type="text">
            </div>

        </form>
        <el-button @click="loginFn">登录</el-button>
    </div>
</template>

<script>
    export default {
        name: "login",
        methods: {
            loginFn() {
                this.$router.replace({path: '/index'})
            }
        }
    }
</script>

<style lang="less" scoped>
    .login {
        .el-button {
            transform: translateY(100%);
        }
    }
</style>
