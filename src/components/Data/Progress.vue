<template>
  <div>
    <el-row>
      <el-col>
        <span>Progress 组件设置percentage属性即可，表示进度条对应的百分比，必填，必须在 0-100。通过 format 属性来指定进度条文字内容。</span>
        <br/>
        <el-input-number v-model="data" placeholder="请输入数值" max="100"></el-input-number>
        <el-progress :percentage="data"></el-progress>
        <el-progress v-for="progress in progresses" :status="progress.status" :percentage="progress.data"></el-progress>
        <el-progress :format="format" :percentage="100"></el-progress>
      </el-col>

      <el-col>
        <span>Progress 组件可通过 stroke-width 属性更改进度条的高度，并可通过 text-inside 属性来将进度条描述置于进度条内部。</span>
        <br/>
        <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
      </el-col>

      <el-col>
        <span>可以通过 color 设置进度条的颜色，color 可以接受颜色字符串，函数和数组。</span>
        <br/>
        <el-input-number v-model="data" placeholder="请输入数值" max="100"></el-input-number>
        <el-progress :percentage="data" :color="color"></el-progress>
      </el-col>

      <el-col>
        <span>Progress 组件可通过 type 属性来指定使用环形进度条，在环形进度条中，还可以通过 width 属性来设置其大小。</span>
        <br/>
        <el-input-number v-model="data" placeholder="请输入数值" max="100"></el-input-number>
        <el-progress type="circle" :percentage="data"  :width="data"></el-progress>
        <el-progress type="circle" :percentage="data" status="success"></el-progress>
        <el-progress type="circle" :percentage="data" status="warning"></el-progress>
        <el-progress type="circle" :percentage="data" status="exception"></el-progress>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Progress',
    data () {
      return {
        data: 30,
        progresses: [
          {data: 100, status: 'warning'},
          {data: 20, status: 'success'},
          {data: 50, status: 'exception'},
        ],
        color: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      }
    },
    methods: {
      format (val) {
        return val === 100 ? '满' : val
      }
    }
  }
</script>

<style scoped>

</style>
