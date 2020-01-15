<template>
  <div>
    <el-row>
      <el-col>
        <span>由type属性来选择tag的类型，也可以通过color属性来自定义背景色。</span>
        <br/>
        <el-tag>标签一</el-tag>
        <el-tag type="success">标签二</el-tag>
        <el-tag type="info">标签三</el-tag>
        <el-tag type="warning">标签四</el-tag>
        <el-tag type="danger">标签五</el-tag>
      </el-col>

      <el-col>
          <span>
            设置closable属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置disable-transitions属性，它接受一个Boolean，true 为关闭。
          </span>
        <br/>
        <el-tag
          v-for="tag in tags"
          :key="tag.name" closable :type="tag.type">{{tag.name}}
        </el-tag>
      </el-col>

      <el-col>
          <span>
           动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现
          </span>
        <br/>
        <el-tag
          v-for="tag in dynamicTags"
          :disable-transitions="false"
          @close="handleClose(tag)"
           closable>{{tag}}
        </el-tag>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Tag',
    data () {
      return {
        tags: [
          {name: '标签一', type: ''},
          {name: '标签二', type: 'success'},
          {name: '标签三', type: 'info'},
          {name: '标签四', type: 'warning'},
          {name: '标签五', type: 'danger'}
        ],
        dynamicTags: ['标签一', '标签二', '标签三'],
      }
    },
    methods:{
      handleClose(tag){
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag),1)
      }
    }
  }
</script>

<style scoped>

</style>
