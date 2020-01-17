<template>
    <div>
      <el-row>
        <el-col>
          <span>
            设置layout，表示需要显示的内容，用逗号分隔，布局元素会依次显示。prev表示上一页，next为下一页，pager表示页码列表，除此以外还提供了jumper和total，size和特殊的布局符号->，->后的元素会靠右显示，jumper表示跳页元素，total表示总条目数，size用于设置每页显示的页码数量。
          </span>
          <span>
            设置background属性可以为分页按钮添加背景色。
          </span>
          <br/>
          <el-pagination
            background
          layout="prev,pager,next"
          :total="1000"
          :page-size="20"
          :pager-count="11"
         ></el-pagination>
        </el-col>
      </el-row>

      <el-row>
        <el-col :spam="24">
          <span>此例是一个完整的用例，使用了size-change和current-change事件来处理页码大小和当前页变动时候触发的事件。page-sizes接受一个整型数组，数组元素为展示的选择每页显示个数的选项，[100, 200, 300, 400]表示四个选项，每页显示 100 个，200 个，300 个或者 400 个。</span>
        </el-col>
        <el-col>
          <el-pagination
          :page-size="100"
          :total="996"
          :current-page="4"
          :page-sizes="[100,200,300,400]"
          layout="total,sizes, prev, pager, next,jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"></el-pagination>
        </el-col>

        <el-col>
          <span>当只有一页时，通过设置 hide-on-single-page 属性来隐藏分页。</span>
          <br/>
          <el-switch v-model="pageHidden"></el-switch>
          <el-pagination
          :hide-on-single-page="pageHidden"
          :total="10"
          :page-size="10"></el-pagination>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: 'Pagination',
    data(){
      return{
        pageHidden:false,
      }
    },
    methods:{
      handleSizeChange(val){
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style scoped>

</style>
