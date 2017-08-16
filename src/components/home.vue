<style>
    
</style>

<template>
    <div>
        <h2>Login</h2>
        {{ress}}
        <br>
        <p>data为后台存储的token，此处为了测试，实际应用不必带回</p>
        <button type="button" @click="signOut">退出</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                ress: null
            }
        },
        mounted () {
            const that = this;
            axios.get('users/home').then(function (res) {
                console.log(res);

                that.ress = res;
            })
        },
        methods: {
            signOut () {
                const that = this;

                axios.post('users/signout').then(function (res) {
                    console.log(res);

                    that.ress = res;
                    that.$router.push('/')
                })
            }
        }
    }
</script>