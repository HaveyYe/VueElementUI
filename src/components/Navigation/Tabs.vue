<template>
  <div>

    <el-row>
      <el-col :span="12">
        <span>基础用法Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 value 属性来指定当前选中的标签页。</span>
        <br/>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="账户管理" name="second">账户管理</el-tab-pane>
          <el-tab-pane label="钱财管理" name="third">钱财管理</el-tab-pane>
        </el-tabs>
      </el-col>

      <el-col :span="12">
        <span>只需要设置 type 属性为 card 就可以使选项卡改变为标签风格。</span>
        <br/>
        <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="账户管理" name="second">账户管理</el-tab-pane>
          <el-tab-pane label="钱财管理" name="third">钱财管理</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <el-row>

      <el-col>
        <span>标签一共有四个方向的设置 tabPosition="left|right|top|bottom"</span>
        <br/>
        <el-tabs v-model="activeName" @tab-click="handleClick" type="card" :tab-position="tabPosition">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="账户管理" name="second">账户管理</el-tab-pane>
          <el-tab-pane label="钱财管理" name="third">钱财管理</el-tab-pane>
        </el-tabs>
      </el-col>

      <el-col>
        <span>增减标签页按钮只能在选项卡样式的标签页下使用</span>
        <br/>
        <el-tabs v-mode="editableTabsValue" type="card" editable @edit="handleTabsEdit">
          <el-tab-pane :key="item.name" v-for="(item,index) in editableTabs" :label="item.title" :name="item.name">{{item.content}}</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Tabs',
    data() {
      return {
        tabIndex: 3,
        activeName: 'first',
        tabPosition:'left',
        editableTabsValue:'2',
        editableTabs:[
          {title:'tab1',name:'1',content:'this is tabl'},
          {title:'tab2',name:'2',content:'this is tab2'},
          {title:'tab3',name:'3',content:'this is tab3'}
        ]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
    }
  }
</script>

<style scoped>
.el-col{
  border: solid #8c939d;
}
</style>
