<template>
  <div>
    <el-row>
      <el-col>
        <span>基本用法：使用 el-time-select 标签，分别通过start、end和step指定可选的起始时间、结束时间和步长</span>
        <el-time-select
          v-model="timeValue"
          :picker-options="{
            start:'0:00',
            end:'23:59',
            step:'00:01'
           }"
          placeholder="请选择时间">
        </el-time-select>
      </el-col>

      <el-col>
        <span>可以选择任意时间。建议使用 使用 el-time-picker 标签，通过selectableRange限制可选时间范围。提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开arrow-control属性则通过界面上的箭头进行选择。</span>
        <br/>
        <!-- selectableRange  这里注意空格     -->
        <el-time-picker
          v-model="timeValue2"
          :picker-options="{
           selectableRange:'18:30:00 - 20:30:00'
           }"
          placeholder="请选择时间">
        </el-time-picker>
        <el-time-picker
          arrow-control
          v-model="value2"
          :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
          }"
          placeholder="任意时间点">
        </el-time-picker>
      </el-col>

      <el-col>
        <span>固定时间范围：有一个minTime。吧这个值设置成开始时间，结束时间就必须大于开始时间</span>
        <br/>
        <!-- selectableRange  这里注意空格     -->
        <el-time-select
          v-model="startTime"
          :picker-options="{
            start:'08:00',
            end:'24:00',
            step:'01:00'
           }"
          placeholder="开始时间">
        </el-time-select>
        <el-time-select
          arrow-control
          v-model="endTime"
          :picker-options="{
            start:'08:00',
            end:'24:00',
            step:'01:00',
            minTime:startTime
          }"
          placeholder="结束时间">
        </el-time-select>
      </el-col>
      <el-col :span="24">
        <span>添加is-range属性即可选择时间范围，同样支持arrow-control属性。用这个属性，返回的必须是数组，并且必须只能是长度为2的数组</span>
        <el-time-picker
        v-model="value1"
        is-range
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        >
        </el-time-picker>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'TimePicker',
    data () {
      return {
        timeValue: '',
        timeValue2: '',
        startTime: '',
        endTime: '',
        value1:[new Date(),new Date()],
        value2:[new Date(),new Date()],
      }
    },
    methods: {}
  }
</script>

<style scoped>

</style>
