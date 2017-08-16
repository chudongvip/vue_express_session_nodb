<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h1>{{ msg }}</h1>
        <router-link :to="{path:'/'}">登录</router-link>  <router-link :to="{path:'/times'}">一个小小的测试</router-link>

        <br><br><br>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            msg: 'vue + express session验证'
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
