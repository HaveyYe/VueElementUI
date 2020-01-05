<template>
  <div id="Button">
    <el-row>
      <el-col :span="24"><span>el-button元素。通过type来区分不同按钮样式。type值有
    primary；success；info；warning；danger</span></el-col>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">微信按钮</el-button>
    </el-row>

    <el-row>
      <el-col :span="24"><span>也可以加入一些主题元素。导致按钮样式发生变化。这里加入plain。使按钮变化朴素</span></el-col>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>微信按钮</el-button>
    </el-row>

    <el-row>
      <el-col :span="24"><span>也可以加入一些主题元素。导致按钮样式发生变化。这里加入round。使按钮变成圆角</span></el-col>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>微信按钮</el-button>
    </el-row>

    <el-row>
      <el-col :span="24"><span>也可以加入一些主题元素。导致按钮样式发生变化。circle。使按钮变成圆型</span></el-col>
      <el-button circle>圆角按钮</el-button>
      <el-button type="primary" circle>主要按钮</el-button>
      <el-button type="success" circle>成功按钮</el-button>
      <el-button type="info" circle>信息按钮</el-button>
      <el-button type="warning" circle>警告按钮</el-button>
      <el-button type="danger" circle>微信按钮</el-button>
    </el-row>

    <el-row>
      <el-col :span="24"><span>当使用circle。我们一般使用icon（图形文字）来设置按钮</span></el-col>
      <el-button circle icon="el-icon-search"></el-button>
      <el-button type="primary" circle icon="el-icon-edit"></el-button>
      <el-button type="success" circle icon="el-icon-delete"></el-button>
      <el-button type="info" circle icon="el-icon-message"></el-button>
      <el-button type="warning" circle icon="el-icon-check"></el-button>
      <el-button type="danger" circle icon="el-icon-star-on"></el-button>
    </el-row>
    <el-row>
      <el-col :span="24"><span>也可以加入一些主题元素。导致按钮样式发生变化。加入disables。使他们表示不可以使用</span></el-col>
      <el-button disabled>圆角按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" disabled>成功按钮</el-button>
      <el-button type="info" disabled>信息按钮</el-button>
      <el-button type="warning" disabled>警告按钮</el-button>
      <el-button type="danger" disabled>微信按钮</el-button>
    </el-row>

    <el-row>
      <el-col :span="24"><span>type=text。代表文字按钮</span></el-col>
      <el-button type="text">文字按钮</el-button>
    </el-row>
    <el-row>
      <el-col :span="24"><span>el-button-group---按钮组。比如翻页</span></el-col>
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i> </el-button>
      </el-button-group>
    </el-row>

    <el-row>
      <el-col :span="24"><span>:loading属性是用来调整加载中按钮样式</span></el-col>
        <el-button type="primary" :loading="true">加载中</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Button'
  }
</script>

<style scoped>

</style>
