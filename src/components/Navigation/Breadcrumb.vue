<template>
  <div>
    <el-row>
      <el-col>
        <span>
          通过设置 separator-class 可使用相应的 iconfont 作为分隔符，注意这将使 separator 设置失效
        </span>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'/tabs'}">tabs</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'/navMenu'}">Navmenu</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>

    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Breadcrumb'
  }
</script>

<style scoped>

</style>
