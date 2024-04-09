<template>
    <div class="nav-bar">
        <a-menu :default-selected-keys="[$router.currentRoute.matched[1].name]" :default-open-keys="[$router.currentRoute.matched[0].name]" mode="inline" theme="dark"
            :inline-collapsed="$store.state.buttons.collapsed">
            <template v-for="item in $store.state.menu.menuRoutes" >
                <a-sub-menu :key="item.name" v-if="!item.meta.hidden">
                    <span slot="title"><a-icon :type="item.meta.icon" /><span>{{ item.meta.title }}</span></span>
                    <a-menu-item v-for=" res in item.children" :key="res.name">
                        <router-link :to="{name:res.name}"><a-icon :type="res.meta.icon" />{{ res.meta.title }}</router-link>
                    </a-menu-item>
                </a-sub-menu>
            </template>
        </a-menu>
    </div>
</template>

<script>
export default {
    created() {
        console.log(this.$router)
    }
}
</script>

<style lang="less" scoped>
.nav-bar {
    width: 180px;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;

    .ant-menu {
        height: 100%;
    }
}
</style>