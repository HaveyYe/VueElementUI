<template>
  <div>

    <el-row>
      <el-col>
          <span>
            导航菜单默认为垂直模式，通过mode属性可以使导航菜单变更为水平模式。另外，在菜单中通过submenu组件可以生成二级菜单。Menu 还提供了background-color、text-color和active-text-color，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。
          </span>
        <br/>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">我的信息</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作</template>
            <el-menu-item index="2-1">未工作</el-menu-item>
            <el-menu-item index="2-2">正在工作</el-menu-item>
            <el-submenu index="2-3">
              <template slot="title">已完成</template>
              <el-menu-item index="2-3-1">已完成1</el-menu-item>
              <el-menu-item index="2-3-2">已完成2</el-menu-item>
              <el-menu-item index="2-3-3">已完成3</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-col>
      <hr/>
      <el-col :span="12">
          <span>
              通过el-menu-item-group组件可以实现菜单进行分组，分组名可以通过title属性直接设定，也可以通过具名 slot 来设定。
          </span>
        <br/>
        <el-button @click="isCollapse=!isCollapse"><i class="el-icon-bangzhu"></i>这是展开</el-button>
        <el-menu
          :collapse="isCollapse"
          :default-active="activeIndex"
          @open="handleOpen"
          @close="handleClose"
          class="el-menu-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">分组1</el-menu-item>
              <el-menu-item index="1-2">分组2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">分组二</template>
              <el-menu-item index="1-3">分组3</el-menu-item>
              <el-submenu index="1-4">
                <template slot="title">分组三</template>
                <el-menu-item index="1-4-1">分组4</el-menu-item>
                <el-menu-item index="1-4-2">分组5</el-menu-item>
                <el-menu-item index="1-4-3">分组6</el-menu-item>
              </el-submenu>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'NavMenu',
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        isCollapse:false,
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
      handleOpen(key, keyPath) {
        this.$message.info(key+","+ keyPath);
      },
      handleClose(key, keyPath) {
        this.$message.info(key+","+keyPath);
      }
    }
  }
</script>

<style scoped>

</style>
