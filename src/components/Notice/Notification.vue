<template>
    <div>
      <el-row>
        <el-col>
          <p>
            Notification 组件提供通知功能，Element 注册了$notify方法，接收一个options字面量参数，在最简单的情况下，你可以设置title字段和message字段，用于设置通知的标题和正文。默认情况下，经过一段时间后 Notification 组件会自动关闭，但是通过设置duration，可以控制关闭的时间间隔，特别的是，如果设置为0，则不会自动关闭。注意：duration接收一个Number，单位为毫秒，默认为4500。
          </p>
          <br/>
          <el-button :plain="true" @click="open">可以自动关闭
          </el-button>
          <el-button :plain="true" @click="open2">这是不会自动关闭
          </el-button>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <p>
            Element 为 Notification 组件准备了四种通知类型：success, warning, info, error。通过type字段来设置，除此以外的值将被忽略。同时，我们也为 Notification 的各种 type 注册了方法，可以在不传入type字段的情况下像open3和open4那样直接调用。          </p>
          <br/>
          <el-button :plain="true" @click="open3">带icon的提醒</el-button>
          <el-button :plain="true" @click="open4">修改弹框位置</el-button>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: 'Notification',
    methods:{
      open(){
        const h =this.$createElement;
        this.$notify({
          title:'标题',
          message:h('i',{style:'color:red'},'这是提示文案')
        })
      },
      open2() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
      },
      open3() {
        this.$notify({
          title: '提示',
          message: '这是一条成功消息',
          type:'success'
        });
      },
      open4() {
        this.$notify({
          title: '自定义角度',
          message: '左上角',
          type: 'success',
          position: 'top-left',
        });
      }
    }
  }
</script>

<style scoped>

</style>
