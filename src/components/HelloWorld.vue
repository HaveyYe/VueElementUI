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
      <el-col :span="6" class="bg-purple">
        <router-link to="/inputNumber">学习InputNumber</router-link>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" class="bg-purple">
        <router-link to="/select">学习Select</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/cascade">学习Cascader联级选择器</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/switch">学习Swicth开关</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/slider">学习Slider滑块</router-link>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" class="bg-purple">
        <router-link to="/timePicker">学习TimePicker</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/datePicker">学习DatePicker日期选择器</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/dateTimePicker">学习dateTimePicke日期时间选择器</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/upload">学习Upload上传</router-link>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" class="bg-purple">
        <router-link to="/rate">学习Rate评分</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/colorPicker">学习colorPicker颜色选择器</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/transfer">学习transfer穿梭板</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/form">学习Form表单</router-link>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" class="bg-purple">
        <router-link to="/table">学习Table表格</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/tag">学习Tag标签</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/progress">学习Progress进度条</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/tree">学习Tree树形控件</router-link>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" class="bg-purple">
        <router-link to="/pagination">学习Pagination分页</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/badge">学习Badge标记</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/avatar">学习Avatar头像</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/tree">学习Tree树形控件</router-link>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" class="bg-purple">
        <router-link to="/alert">学习Alert警告</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/loading">学习Loading加载</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/message">学习Message消息提示</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/messageBox">学习MessageBox弹框</router-link>
      </el-col>
    </el-row>
    <el-row>
    <el-col :span="6" class="bg-purple">
      <router-link to="/notification">学习Notification通知</router-link>
    </el-col>
    <el-col :span="6" class="bg-purple">
      <router-link to="/navMenu">学习NavMenu菜单</router-link>
    </el-col>
    <el-col :span="6" class="bg-purple">
      <router-link to="/breadcrumb">学习Breadcrumb面包屑</router-link>
    </el-col>
    <el-col :span="6" class="bg-purple">
      <router-link to="/pageHeader">学习PageHeader页头</router-link>
    </el-col>
  </el-row>
    <el-row>
      <el-col :span="6" class="bg-purple">
        <router-link to="/dropDown">学习DropDown下拉菜单</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/step">学习Step步骤</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/breadcrumb">学习Breadcrumb面包屑</router-link>
      </el-col>
      <el-col :span="6" class="bg-purple">
        <router-link to="/pageHeader">学习PageHeader页头</router-link>
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
