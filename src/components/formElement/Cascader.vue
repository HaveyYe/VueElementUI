<template>
  <!--这是一个类似菜单栏的组件。比如选择地址：浙江--杭州--滨江区-->
  <div id="Cascade" class="block">
    <el-row>
      <el-col :span="24">只需为 Cascader 的options属性指定选项数组即可渲染出一个级联选择器。通过props.expandTrigger可以定义展开子级菜单的触发方式</el-col>
      <span class="demonstration">默认Click触发子菜单</span>
      <el-cascader v-mode="value" :options="options" @change="handleChange"></el-cascader>
      <span class="demonstration">hover 触发子菜单</span>
      <el-cascader
        v-model="value"
        :options="options"
        :props="{ expandTrigger: 'hover' }"
        @change="handleChange"></el-cascader>
    </el-row>

    <el-row>
      <el-col :span="24">属性show-all-levels定义了是否显示完整的路径，将其赋值为false则仅显示最后一级</el-col>
      <el-col :span="24">
        <el-cascader v-model="value" :options="options" :show-all-levels=false></el-cascader>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">可通过 props.multiple = true 来开启多选模式;在开启多选模式后，默认情况下会展示所有已选中的选项的Tag，你可以使用collapse-tags来折叠Tag
      </el-col>
      <el-col :span="24">
        <el-cascader v-model="value" :options="options" :props="props" clearable collapse-tags></el-cascader>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">选择任意一级选项:可通过 props.multiple = true
        可通过 props.checkStrictly = true 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。
      </el-col>
      <el-col :span="24">
        <el-cascader v-model="value" :options="options" :props="props" clearable ></el-cascader>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">可以通过scoped slot对级联选择器的备选项的节点内容进行自定义，scoped slot会传入两个字段 node 和 data，分别表示当前节点的 Node 对象和数据。
      </el-col>
      <el-col :span="24">
        <el-cascader v-model="value" :options="options" clearable >
          <template slot-scope="{node,data}">
            <span>{{data.label}}</span>
            <span v-if="!node.isLeaf">({{data.children.length}})</span>
          </template>
        </el-cascader>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">关键字 ：el-cascader-panel 和级联选择器一样，通过options来指定选项，也可通过props来设置多选、动态加载等功能
      </el-col>
      <el-col :span="24">
        <el-cascader-panel v-model="value" :options="options" clearable >
        </el-cascader-panel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Cascade',
    data () {
      return {
        props: {multiple: true},
        value: [],
        options: [
          {
            label: '浙江',
            value: '33',
            children: [
              {
                label: '杭州',
                value: '3301',
                children: [
                  {label: '滨江区', value: '330101'},
                  {label: '上城区', value: '330102'},
                  {label: '下城区', value: '330103'},
                  {label: '拱墅区', value: '330104'},
                ]
              },
              {
                label: '丽水',
                value: '3325',
                children: [
                  {label: '莲都区', value: '332501'},
                  {label: '青田', value: '332522'},
                  {label: '景云', value: '332523'},
                  {label: '遂昌', value: '332524'},
                ]
              }
            ]
          },
          {
            label: '江苏',
            value: '32',
            children: [
              {
                label: '南京',
                value: '3201',
                children: [
                  {label: '玄武区', value: '320102'},
                  {label: '秦淮区', value: '320103'},
                  {label: '鼓楼区', value: '320104'},
                  {label: '建邺区', value: '320105'},
                ]
              },
              {
                label: '淮安',
                value: '3223',
                children: [
                  {label: '清江浦区', value: '322301'},
                  {label: '淮阴区', value: '322302'},
                  {label: '淮安区', value: '322303'},
                  {label: '遂昌', value: '322304'},
                ]
              }
            ]
          },
        ]
      }
    },//end data
    methods: {
      handleChange (val) {
        console.log(val)
      }
    }
  }
</script>

<style scoped>

</style>
