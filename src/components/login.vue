<style>
    
</style>

<template>
        <div>
            <input type="text" v-model="phone">
            <input type="password" v-model="pwd">
            <button type="button" @click="login">登录</button>
        </div>
</template>

<script>
    export default {
        data () {
            return {
                phone: '',
                pwd: ''
            }
        },
        methods: {
            login () {
                const that = this;
                axios.post('users/login', {
                    pwd: that.pwd,
                    telphone: that.phone
                }).then(function (response) {
                    console.log(response);

                    that.$router.push('/home');
                })
            }
        }
    }
</script>