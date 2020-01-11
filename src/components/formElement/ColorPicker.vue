<template>
    <div>
      <el-row>
        <el-col>
          <span>ColorPicker 支持普通颜色，也支持带 Alpha 通道的颜色，通过show-alpha属性即可控制是否支持透明度的选择。
          </span>
          <el-color-picker v-model="value" @change="handleChange" show-alpha>
          </el-color-picker>
        </el-col>
        <el-col>
          <span>ColorPicker 支持预定义颜色
          </span>
          <br/>
          <el-color-picker v-model="value" @change="handleChange" show-alpha :predefine="colors">
          </el-color-picker>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: 'ColorPicker',
    data(){
      return {
        value:'',
        colors:[
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'

        ]
      }
    },
    methods:{
      handleChange(val){
        this.$message({showClose:true,message:val,type:'success'})
      }
    }
  }
</script>

<style scoped>

</style>
