<template>
  <div id="Container">
    <el-container>
      <el-header>这是个头部用el-header标签</el-header>
      <el-main>这个是主要部分 用el-main标签</el-main>
      <el-footer>这个是底部，用el-footer标签</el-footer>
    </el-container>

    <el-container>
      <el-header>这是最外面头部</el-header>
      <el-container style=" margin-bottom: 0px;">
        <el-aside width="200px">这是左边。可以通过width控制宽度</el-aside>
        <el-main>这是主内容</el-main>
      </el-container>
      <el-footer>这是外面的脚内容</el-footer>
    </el-container>

    <el-container >
      <el-aside width="100px">这是左边</el-aside>
      <el-container style=" margin-bottom: 0px;">
        <el-header>这是里面头部</el-header>
        <el-main>这是主内容</el-main>
        <el-footer>这是里面的脚内容</el-footer>
      </el-container>
    </el-container>

    <el-container style="height: 500px; border: 1px solid #eee;margin-bottom: 0px;">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['2']"><!--default-opends默认打开的下来菜单是什么。这里默认打开二-->
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>个人信息</template>
            <el-menu-item-group>
              <template slot="title">基本信息</template>
              <el-menu-item index="1-1">姓名</el-menu-item>
              <el-menu-item index="1-2">年龄</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="联系电话">
              <el-menu-item index="1-3">联系电话</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">家庭住址</template>
              <el-menu-item index="1-4-1">所在地区</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
           <template slot="title"><i class="el-icon-menu"></i>工作信息</template>
            <el-submenu index="2-1">
              <template slot="title">第一份工作单位</template>
              <el-menu-item index="2-1-1">单位名称</el-menu-item>
              <el-menu-item index="2-1-1">单位地址</el-menu-item>
            </el-submenu>
            <el-submenu index="2-2">
              <template slot="title">第二份工作单位</template>
              <el-menu-item index="2-2-1">单位名称</el-menu-item>
              <el-menu-item index="2-2-1">单位地址</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container style="margin-bottom: 0px;">
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>HaveyYe</span>
        </el-header>

        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'Container',
    data() {
      const item = {
        date: '2020-01-04',
        name: 'HaveyYe',
        address: '杭州市滨江区西兴街道'
      };
      return {
        tableData: Array(5).fill(item)
      }
    }
  }
</script>
<style>
  /*这里用的.class来选择DOM，页面成功后，你会发现Element的元素被解析成html标签。用class来加样式*/
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

   .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
