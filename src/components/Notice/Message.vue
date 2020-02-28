<template>
  <div>
    <el-col>
      <el-row>
          <span>
            Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释，文末有 options 列表，可以结合 Notification 的文档理解它们。Element 注册了一个$message方法用于调用，
            <br/>Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。
          </span>
        <br/>
        <el-button :plain="true" @click="open('叶淮委')">打开消息提示</el-button>
        <el-button type="warning" @click="openVn">这是Vnode</el-button>
      </el-row>

      <el-row>
          <span>
          当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置type字段可以定义不同的状态，默认为info。此时正文内容以message的值传入。同时，我们也为 Message 的各种 type 注册了方法，可以在不传入type字段的情况下像open4那样直接调用。
          </span>
        <br/>
        <el-button :plain="true" @click="open1">成功</el-button>
        <el-button :plain="true" @click="open2">警告</el-button>
        <el-button :plain="true" @click="open4">错误</el-button>
      </el-row>

      <el-row>
          <span>
          默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用showClose字段。此外，和 Notification 一样，Message 拥有可控的duration，设置0为不会被自动关闭，默认为 3000 毫秒。          </span>
        <br/>
        <el-button :plain="true" @click="open5">成功</el-button>
      </el-row>

      <el-row>
          <span>
          将dangerouslyUseHTMLString属性设置为 true，message 就会被当作 HTML 片段处理。
          </span>
            <br/>
        <el-button :plain="true" @click="open6">html</el-button>
      </el-row>
    </el-col>

  </div>
</template>

<script>
  export default {
    name: 'Message',
    methods: {
      open (name) {
        this.$message('这是一条消息' + name)
      },
      openVn () {
        const h = this.$createElement
        this.$message({
          message: h('p', null, [
            h('span', null, '内容可意思'),
            h('i', {style: 'color:teal'}, 'VNode')
          ])
        })
      },
      open1 () {
        this.$message({
          message: '这是一条成功消息',
          type: 'success'
        })
      },
      open2 () {
        /*  this.$message({
            message:'这是一条警告消息',
            type:'warning'
          });*/
        this.$message.warning('这是警告')
      },
      open4 () {
        /*this.$message({
          message:'这是一条错误消息',
          type:'error'
        });*/
        //也可以简化
        this.$message.error('这是错误')
      },
      open5 () {
        this.$message({
          message: '可以手动关闭',
          type: 'success',
          showClose: true,//显示关闭按钮
          center: true,//文字居中
        })
      },
      open6 () {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<Strong>可以加载htm片段</Strong>',
          type: 'success',
          showClose: true,//显示关闭按钮
          center: true,//文字居中
        })
      }
    }
  }

</script>

<style scoped>

</style>
