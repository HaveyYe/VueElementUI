<template>
  <el-row>
    <el-col>
      <span @click="loading=!loading">基础用法：在表格等容器中加载数据时显示。Element 提供了两种调用 Loading 的方法：指令和服务。对于自定义指令v-loading，只需要绑定Boolean即可。默认状况下，Loading 遮罩会插入到绑定元素的子节点，通过添加body修饰符，可以使遮罩插入至 DOM 中的 body 上。</span>
      <br/>
      <el-table
      :data="tableData"
      v-loading="loading">
        <el-table-column
        prop="name"
        label="姓名"
        width="180px"></el-table-column>
        <el-table-column
          prop="age"
          label="年龄"
          width="180px"></el-table-column>
      </el-table>
    </el-col>
    <el-col>
      <span>自定义可自定义加载文案、图标和背景色。在绑定了v-loading指令的元素上添加element-loading-text属性，其值会被渲染为加载文案，并显示在加载图标的下方。类似地，element-loading-spinner和element-loading-background属性分别用来设定图标类名和背景色值。</span>
      <br/>
      <el-table
        :data="tableData"
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-background="black">
        <el-table-column
          prop="name"
          label="姓名"
          width="180px"></el-table-column>
        <el-table-column
          prop="age"
          label="年龄"
          width="180px"></el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'Loading',
    data(){
      return{
        tableData:[
          {name:'叶淮委',age:26},
          {name:'叶阿斗',age:22},
          {name:'叶某某',age:24},
        ],
        loading:true
      }
    }
  }
</script>

<style scoped>

</style>
