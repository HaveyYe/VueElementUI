<template>
    <div>
      <el-row>
        <el-col>
          <span>基础用法：基本单位由type属性指定。快捷选项需配置picker-options对象中的shortcuts，禁用日期通过 disabledDate 设置，传入函数</span>
          <br/>
          <el-date-picker
          v-model="value"
          type="date"
          placeholder="请选择日期"
          align="right"
          :picker-options="pickerOptions">
          </el-date-picker>
        </el-col>
        <el-col :span="6">
          <span>选择第几周：</span>
          <br/>
          <el-date-picker
            v-model="week"
            type="week"
            format="yyyy第WW周"
            placeholder="请选择周">
          </el-date-picker>
        </el-col>
        <el-col :span="6">
          <span>选择年：</span>
          <br/>
          <el-date-picker
            v-model="year"
            type="year"
            format="yyyy"
            placeholder="请选择年">
          </el-date-picker>
        </el-col>
        <el-col :span="6">
          <span>选择月：</span>
          <br/>
          <el-date-picker
            v-model="month"
            type="month"
            format="MM月"
            placeholder="请选择月份">
          </el-date-picker>
        </el-col>
        <el-col :span="6">
          <span>多个日期：type='dates'</span>
          <br/>
          <el-date-picker
            v-model="dates"
            type="dates"
            placeholder="请选择日期">
          </el-date-picker>
        </el-col>
        <el-col :span="24">
          <span>选择日期范围 在选择日期范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前月份，可以使用unlink-panels属性解除联动。</span>
          <br/>
          <el-date-picker
            v-model="dates"
            type="daterange"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            placeholder="请选择日期"
          :picker-options="pickerOptions">
          </el-date-picker>
        </el-col>
        <el-col :span="24">
          <span>选择月份范围 默认情况下左右面板会联动。如果希望两个面板各自独立切换当前月份，可以使用unlink-panels属性解除联动。</span>
          <br/>
          <el-date-picker
            v-model="dates"
            type="monthrange"
            unlink-panels
            range-separator="至"
            start-placeholder="开始月份"
            end-placeholder="结束月份"
            placeholder="请选择日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: 'DatePicker',
    data(){
      return{
        value:'',
        week:'',
        year:'',
        month:'',
        dates:[],
        pickerOptions:{
          disabledDate(time) {
            return time.getTime() > Date.now()
          },
          shortcuts:[
            {
              text:'最近一个月',
              onClick (picker) {
                picker.$emit('pick',[new Date().getTime()-3600*1000*24*30,new Date()])
              }
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>

</style>
