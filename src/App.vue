<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <!--<router-view/>-->

    <el-container>
      <el-aside width="200px" class="left">
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                router
        >
            <el-menu-item index="/">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>

            <el-menu-item index="/about">
                <i class="el-icon-setting"></i>
                <span slot="title">关于</span>
            </el-menu-item>

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>lcj</span>
            </template>
              <el-menu-item index="/config">配置</el-menu-item>
              <el-menu-item index="/lcj">测试</el-menu-item>
            </el-submenu>

          <!--<el-menu-item index="2">-->
            <!--<i class="el-icon-menu"></i>-->
            <!--<span slot="title">导航二</span>-->
          <!--</el-menu-item>-->
          <!--<el-menu-item index="4">-->
            <!--<i class="el-icon-setting"></i>-->
            <!--<span slot="title">导航四</span>-->
          <!--</el-menu-item>-->
        </el-menu>
      </el-aside>

      <el-container>
          <!--头部-->
        <el-header>Header</el-header>
          <!--内容-->
        <el-main>
            <router-view/>
        </el-main>
          <!--脚步-->
        <el-footer class="foot">版权归lcj所有</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
    .left{
        height: 100%;
    }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
