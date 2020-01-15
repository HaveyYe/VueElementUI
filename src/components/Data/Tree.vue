<template>
    <div>
      <el-row>
        <el-col>
          <span>基础用法  accordion手风琴模式对于同一级的节点，每次只能展开一个; </span>
          <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick" accordion ></el-tree>
        </el-col>
        <el-col>
          <span>通过 draggable 属性可让节点变为可拖拽。 </span>
          <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick" draggable default-expand-all></el-tree>
        </el-col>

        <el-col>
          <span>在需要对节点进行过滤时，调用 Tree 实例的filter方法，参数为关键字。需要注意的是，此时需要设置filter-node-method，值为过滤函数。</span>
          <br/>
          <el-input
            placeholder="输入关键字进行过滤"
            v-model="filterText">
          </el-input>
          <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick" :filter-node-method="filterNode" ref="tree" default-expand-all></el-tree>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: 'Tree',
    watch:{
      filterText(val){
        this.$refs.tree.filter(val);
      }
    },
    data(){
      return{
        filterText:'',
        treeData:[
          {label:'我的工作',
          children:[
            {label:'临时任务',
            children:[{
              label:'具体信息'
            }]}
          ]},
          {label:'我的信息',
            children:[
              {label:'基本信息',
                children:[{
                  label:'年龄'
                }]}
            ]}
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      filterNode(value,data){
        if(!value){
          return true
        }
        return data.label.indexOf(value)!=-1;
      }
    }
  }
</script>

<style scoped>

</style>
