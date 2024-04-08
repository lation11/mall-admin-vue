<template>
    <div class="home-header">
        <div class="home-header-left">
            <a-button type="primary" @click="toggleCollapsed">
                <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
            </a-button>
            <a-breadcrumb>
                <a-breadcrumb-item>首页</a-breadcrumb-item>
                <a-breadcrumb-item><a href="">操作</a></a-breadcrumb-item>
            </a-breadcrumb>
        </div>
        <ul class="home-use-box">
            <li>你好 admin<a-icon class="icon-down" type="down" /></li>
            <li>退出</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        collapsed:{
            type:Boolean
        }
    },
    methods: {
        toggleCollapsed() {
            this.$emit('update:collapsed',!this.collapsed )
        },
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