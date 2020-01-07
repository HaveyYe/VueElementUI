<template>
    <div>
      <el-row class="el-row">
        <el-col :span="24" class="bg-purple-light">基础用法 min是最小值。max是最大值</el-col>
        <el-col :span="24">
          <el-input-number v-model="number" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        </el-col>
      </el-row>
      <el-row class="el-row">
        <el-col :span="24" class="bg-purple-light">可以用step来确定每一次的步长</el-col>
        <el-col :span="24">
          <el-input-number v-model="number" @change="handleChange" :min="1" :max="10" :step="2"></el-input-number>
        </el-col>
      </el-row>

      <el-row class="el-row">
        <el-col :span="24" class="bg-purple-light">可以用step来确定每一次的步长</el-col>
        <el-col :span="24">
          <el-input-number v-model="number" @change="handleChange" :min="1" :max="10" :step="2"></el-input-number>
        </el-col>
      </el-row>

      <el-row class="el-row">
        <el-col :span="24" class="bg-purple-light">step-strictly可以使里面的数值永远只能是步长的倍数。</el-col>
        <el-col :span="24">
          <el-input-number v-model="number" @change="handleChange" :step="3" :step-strictly=true></el-input-number>
        </el-col>
      </el-row>

      <el-row class="el-row">
        <el-col :span="24" class="bg-purple-light">设置 precision 属性可以控制数值精度，接收一个 Number。precision 的值必须是一个非负整数，并且不能小于 step 的小数位数。</el-col>
        <el-col :span="24">
          <el-input-number v-model="precision" @change="handleChange" :precision="2" :step="0.02"></el-input-number>
        </el-col>
      </el-row>

      <el-row class="el-row">
        <el-col :span="24" class="bg-purple-light">设置 controls-position 只能选择right 属性可以控制按钮位置。</el-col>
        <el-col :span="24">
          <el-input-number v-model="precision" @change="handleChange" :precision="2" :step="0.02" controls-position="right"></el-input-number>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: 'InputNumber',
    data(){
      return{
        number:1,
        precision:1.00
      }
    },
    methods:{
      handleChange:function (val) {
       console.log(val);
      }
    }
  }
</script>

<style scoped>

</style>
