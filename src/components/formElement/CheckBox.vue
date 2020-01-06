<template xmlns:el-col="http://www.w3.org/1999/html">
  <div>
    <el-row class="row-bg">
      <el-col :span="24" class="bg-purple-dark">在el-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true。
      </el-col>
      <el-checkbox v-model="checked">选项一</el-checkbox>
    </el-row>

    <el-row class="row-bg">
      <el-col :span="24" class="bg-purple-dark">checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group
        中使用v-model绑定Array类型的变量即可。el-checkbox 的 label属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。
      </el-col>
      <el-checkbox-group v-model="fruits">
        <el-checkbox label="Apple"></el-checkbox>
        <el-checkbox label="Orange"></el-checkbox>
        <el-checkbox label="Waterloom"></el-checkbox>
        <el-checkbox label="Water"></el-checkbox>
        <el-checkbox label="sea"></el-checkbox>
      </el-checkbox-group>
    </el-row>

    <el-row>
      <el-col :span="24">indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果</el-col>
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <el-col :span="24">
        <el-checkbox-group v-model="checkCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">使用 min 和 max 属性能够限制可以被勾选的项目的数量。</el-col>
      <el-col :span="24">
        <el-checkbox-group v-model="checkCities" :min="1" :max="2">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'CheckBox',
    data () {
      return {
        checked: false,
        fruits:['Apple','Orange'],
        isIndeterminate :true,
        checkAll:false,
        cities:['上海','北京','深圳','广州'],
        checkCities:['深圳','广州']
      }
    },
    methods:{
      handleCheckAllChange:function(val){//点击全选按钮事件
        //如果选中的内容和提供选择的内容相同，则就当提供选择的内容，否则就是取消全选
        this.checkCities=val?this.cities:[];
        this.isIndeterminate=false;
      },
      handleCheckedCitiesChange(value){
        //获得选择的长度
        let checkedCount=value.length;
        //如果是提供选择的内容的长度，则表示是全选了。
        this.checkAll=checkedCount==this.cities.length;
        this.isIndeterminate=checkedCount>0&&checkedCount<this.cities.length
      }
    }
  }
</script>
<style src="../../../static/css/AllCss.css"></style>
<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
</style>
