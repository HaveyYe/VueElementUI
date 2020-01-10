<template>
    <div>
      <el-row>
        <el-col>
          <span>通过设置type属性为datetime，即可在同一个选择器里同时进行日期和时间的选择。快捷选项的使用方法与 Date Picker 相同。 通过选项default-time可以控制选中起始与结束日期时所使用的具体时刻。</span>
          <br/>
          <el-date-picker
          type="datetime"
          v-model="value"
          placeholder="请选择日期和时间"></el-date-picker>
        </el-col>
        <el-col>
          <span class="demonstration">默认时间范围</span>
          <br/>
          <el-date-picker
            v-model="value1"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          :picker-options="pickerOptions"
          :default-time="['12:00:00','08:00:00']">
          </el-date-picker>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: 'DateTimePicker',
    data(){
      return{
        value:"",
        value1:[],
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
      };
    },
  }
</script>

<style scoped>

</style>
