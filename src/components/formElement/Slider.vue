<template>
  <div>
    <el-row>
      <el-col :span="24">
        基础用法：
      </el-col>
      <el-col>
        <el-slider v-model="value" @change="handleChange"></el-slider>
      </el-col>
      <el-col>
        <span>也可以通过改变value的值，来设定初始值</span>
        <el-slider v-model="value2" @change="handleChange"></el-slider>
      </el-col>
      <el-col>
        <span>show-tooltip来隐藏鼠标悬浮时的数值</span>
        <el-slider v-model="value2" @change="handleChange" :show-tooltip=false></el-slider>
      </el-col>
      <el-col>
        <span>也可以通过format-tooltip格式化数值。也就是Tooltip</span>
        <el-slider v-model="value2" @change="handleChange" :format-tooltip="format"></el-slider>
      </el-col>
      <el-col>
        <span>可以通过step来修改增加步长，也可以通过show-stops来显示间断点</span>
        <el-slider v-model="value2" @change="handleChange" :step="10" :show-stops=true></el-slider>
      </el-col>
      <el-col>
        <span>设置show-input属性会在右侧显示一个输入框</span>
        <el-slider v-model="value2" @change="handleChange" show-input></el-slider>
      </el-col>
      <el-col>
        <span>设置range即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值</span>
        <el-slider v-model="value3" @change="handleChange" range show-stops :max="6"></el-slider>
      </el-col>
      <el-col>
        <span>设置vertical可使 Slider 变成竖向模式，此时必须设置高度height属性.heght的单位是PX</span>
        <el-slider v-model="value" @change="handleChange"
                   vertical
                   height="200px">
        </el-slider>
      </el-col>
      <el-col>
        <span>设置 marks 属性可以展示标记</span>
        <el-slider v-model="value" @change="handleChange"
                   :marks="marks" :max="55">
        </el-slider>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Slider',
    data () {
      return {
        value:0,
        value2:30,
        value3:[4,8],
        marks:{
          0:"0℃",
          35:"35℃",
          37:"37℃",
          40:"40℃",
          55:"55℃"
        }
      }
    },
    methods:{
      handleChange(val){
        console.log(val);
      },
      format(val){
        return val/100
      }
    }
  }
</script>

<style scoped>

</style>
