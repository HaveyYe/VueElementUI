<template>
  <div>
    <el-row>
      <el-col :span="24">radio的值是用label。并且用v-model绑定值</el-col>
      <el-radio v-model="radio" label="1">单选1</el-radio>
      <el-radio v-model="radio" label="2">单选2</el-radio>
    </el-row>

    <el-row>
      <el-col :span="24">结合el-radio-group元素和子元素el-radio可以实现单选组</el-col>
      <el-radio-group v-model="radio2">
        <el-radio label="3">单选1</el-radio>
        <el-radio label="4">单选2</el-radio>
      </el-radio-group>
    </el-row>
    <el-row>
      <el-col :span="24">el-radio-button 变成方块单选</el-col>
      <el-radio-group v-model="radio3">
        <el-radio-button label="5">单选1</el-radio-button>
        <el-radio-button label="6">单选2</el-radio-button>
      </el-radio-group>
    </el-row>
    <el-row>
      <el-col :span="24">size可以使单选按钮大小变化</el-col>
      <el-radio-group v-model="radio4">
        <el-radio label="7" border size="mini">单选1</el-radio>
        <el-radio label="8" border size="small">单选2</el-radio>
      </el-radio-group>
    </el-row>
    <el-row>
      <el-col :span="24">border可以使单选有边框</el-col>
      <el-radio-group v-model="radio5">
        <el-radio label="9" border>单选1</el-radio>
        <el-radio label="10" border>单选2</el-radio>
      </el-radio-group>
    </el-row>


  </div>
</template>

<script>
  export default {
    name: 'Radio',
    data () {
      return {
        radio: '1',
        radio2:'3',
        radio3:'5',
        radio4:'7',
        radio5:'9',
      }
    }
  }
</script>

<style scoped>

</style>
