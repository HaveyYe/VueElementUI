<template>
    <div>
      <el-row>
        <el-col>
          <span>直接上指令</span>
          <hr/>
          <el-dropdown @command="handleCommand">
            <span>下拉菜单<i class="el-icon-arrow-down el-icon--rightr"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="1">1</el-dropdown-item>
              <el-dropdown-item  command="2">2</el-dropdown-item>
              <el-dropdown-item  command="3">3</el-dropdown-item>
              <el-dropdown-item  command="4">4</el-dropdown-item>
              <el-dropdown-item  command="5">5</el-dropdown-item>
              <el-dropdown-item  command="6">6</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: 'Dropdown',
    methods:{
      handleCommand(command){
        this.$message('click on item ' + command);
      }
    }
  }
</script>

<style scoped>

</style>
