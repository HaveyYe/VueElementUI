<template>
  <div class="hello">
    <el-row :gutter="20">
      <el-col :span="6" class="bg-purple-light">
        <router-link to="/layout">学习Layout布局</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/container">学习Container布局容器</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple-light">
        <router-link to="/button">学习Button</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple-dark">
        <router-link to="/link">学习Link</router-link>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" class="bg-purple-dark">
        <router-link to="/radio">学习Radio</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/checkBox">checkBox</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/input">学习Input</router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  //这个Vue是学习目录，通过点击不同的目录，来跳转到不同的Vue组件
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
<style src="../../static/css/AllCss.css"></style>
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
