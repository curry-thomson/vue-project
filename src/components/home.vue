<template>
<el-button @click="logout" type="info">退出</el-button>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        logout(){
            window.sessionStorage.clear('token');
            this.$router.push('/login')
        }
    }
    
}
</script>
<style lang="less" scoped>
div{
    color:yellow
}
</style>