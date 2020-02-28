<template>
    <div>
      <el-row>
        <span>
          如果页面的路径比较简单，推荐使用页头组件而非面包屑组件。
        </span>
        <br/>
        <el-page-header @back="goBack" content="详情页面">
        </el-page-header>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: 'PageHeader',
    methods: {
      goBack() {
        console.log('go back');
      }
    }
  }
</script>

<style scoped>

</style>
