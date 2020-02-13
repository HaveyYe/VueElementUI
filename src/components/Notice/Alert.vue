<template>
  <div id="alert">
    <el-row>
      <el-col>
        <span>基础用法:Alert 组件提供四种主题，由type属性指定，默认值为info。通过设置effect属性来改变主题，默认为light。</span>
        <br/>
        <el-alert
          title="成功提示的文案"
          type="success"
          effect="dark">
        </el-alert>
        <el-alert
          title="成功提示的文案"
          type="success"
          effect="light">
        </el-alert>
        <el-alert
          title="消息提示的文案"
          type="info">
        </el-alert>
        <el-alert
          title="错误提示的文案"
          type="error">
        </el-alert>
        <el-alert
          title="警告提示的文案"
          type="warning">
        </el-alert>
      </el-col>
      <el-col>
        <span>自定义关闭按钮</span>
        <br/>
        <el-alert
          type="success"
          :closable="false"
          title="没有关闭按钮">
        </el-alert>
        <el-alert
          title="自定义 close-text"
          type="info"
          close-text="知道了">
        </el-alert>
        <el-alert
          type="warning"
          @close="handleClose()"
          title="设置关闭函数">
        </el-alert>
      </el-col>
      <el-col>
        <span>
          自带ICON：show-icon;文字居中：使用 center 属性让文字水平居中。
        </span>
        <el-alert
          type="warning"
          title="带icon"
          show-icon
        >
        </el-alert>
        <el-alert
          type="success"
          title="带icon的成功以及文字居中"
          show-icon
          center
        >
        </el-alert>
      </el-col>
      <el-col>
        <span>带有辅助性文字介绍:除了必填的title属性外，你可以设置description属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放单行文本，会自动换行显示。</span>
        <br/>
        <el-alert
        type="success"
        title="成功登录"
        description="你已经成功登录">

        </el-alert>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'Alert',
    methods: {
      handleClose () {
        alert('123')
      }
    }
  }
</script>

<style scoped>

</style>
