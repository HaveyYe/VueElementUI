<template>
  <div class="hello">
    <el-row :gutter="20">
      <el-col :span="6" class="bg-purple-light"><router-link to="/layout">学习Layout布局</router-link></el-col>
      <el-col :span="6" class="bg-purple"><router-link to="/container">学习Container布局容器</router-link></el-col>
      <el-col :span="6" class="bg-purple-light"><router-link to="/button">学习Button</router-link></el-col>
      <el-col :span="6" class="bg-purple-dark"><router-link to="/link">学习Link</router-link></el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style src="../assets/css/AllCss.css"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
