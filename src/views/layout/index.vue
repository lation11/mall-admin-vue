<template>
    <div class="home-container">
        <NavBar :collapsed="collapsed"></NavBar>
        <div class="home-main" :style="{ marginLeft: (collapsed ? '80px' : '180px') }">
          <HeaderBar :collapsed.sync="collapsed"></HeaderBar>
        </div>
    </div>

</template>

<script>
import NavBar from './navBar/navBar.vue';
import HeaderBar from './headerBar/headerBar.vue'
export default {
    components: {
        NavBar,
        HeaderBar
        
    },
    data() {
        return {
            collapsed: false,
        };
    },
  
};
</script>
<style lang="less" scoped>
.home-container {
    width: 100%;
    height: 100%;
    .home-main {
        margin-left: 180px;
        transition: all 300ms;

      
    }
}
</style>