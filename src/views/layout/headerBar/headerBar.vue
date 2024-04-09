<template>
    <div class="home-header">
        <div class="home-header-left">
            <a-button type="primary" @click="toggleCollapsed">
                <a-icon :type="$store.state.buttons.collapsed ? 'menu-unfold' : 'menu-fold'" />
            </a-button>
            <a-breadcrumb v-if="currentRoute.length>0">
                <a-breadcrumb-item>{{currentRoute[0]?currentRoute[0].meta.title:""}}</a-breadcrumb-item>
                <a-breadcrumb-item><a href=""></a>{{ currentRoute[1]?currentRoute[1].meta.title:"" }}</a-breadcrumb-item>
            </a-breadcrumb>
        </div>
        <ul class="home-use-box">
            <li>你好 {{ $store.getters.getUserInfo.username }}<a-icon class="icon-down" type="down" /></li>
            <li @click="loginOut">退出</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            currentRoute:this.$route.matched
        }
        
    },
    created(){
        console.log(this.$route);
    },
    watch:{
        "$route"(to,from){
            //console.log('====',this.$route);
           this.currentRoute = this.$route.matched;
           console.log(this.$route.matched.length);
        }
    },
    methods: {
        toggleCollapsed() {
            this.$store.dispatch('asyncChangeCollapsed')
        },
        loginOut(){
            this.$store.dispatch('loginOut')
            this.$router.push({name:'Login'})
        }
    },
}
</script>

<style lang="less" scoped>
.home-header {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    padding: 0 20px;

    .home-header-left {
        display: flex;
        align-items: center;

        .ant-btn-primary {
            margin-right: 15px;
        }

    }

    .home-use-box {
        height: 50px;
        line-height: 50px;
        li {
            padding: 0 30px;
            text-align: center;
            cursor: pointer;
            .icon-down{
                margin-left: 5px;
            }
            &:not(:first-child) {
                display: none;
                border: 1px solid #eee;
                border-top: transparent;
                &:hover {
                    background-color: #eee;
                    color: #999;
                }
            }
        }

        &:hover li {
            display: block;
        }

    }
}
</style>