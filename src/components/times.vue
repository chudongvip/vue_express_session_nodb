<style>
    
</style>

<template>
    <div>
        {{ ress }}
        <br>
        <br><br>
        <router-link :to="{path:'/'}">返回上一级</router-link>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                ress: ''
            }
        },
        mounted () {
            const that = this;
            axios.get('users').then(function (response) {
                that.ress = response.data;
            })
        }
    }
</script>