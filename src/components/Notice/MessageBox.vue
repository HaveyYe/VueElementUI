<template>
    <div>

        <el-row>
          <el-col>
            <span>
          调用$prompt方法即可打开消息提示，
              它模拟了系统的 prompt。
              可以用inputPattern字段自己规定匹配模式，
              或者用inputValidator规定校验函数，可以返回Boolean或String，返回false或字符串时均表示校验未通过，
              同时返回的字符串相当于定义了inputErrorMessage字段。此外，可以用inputPlaceholder字段来定义输入框的占位符。
            </span>
            <br/>
            <el-button type="text" @click="open">点击打开 Message Box</el-button>
          </el-col>
        </el-row>
    </div>
</template>

<script>
  export default {
    name: 'MessageBox',
    methods:{
      open(){
        this.$prompt("请输入名字",'提示',{
          confirmButtonText:'确定',
          cancelButtonText:"取消",
          /*输入的数据校验
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'*/
        }).then(({value}) => {
          this.$message({
            type:'success',
            message:'你的名字是'+value
          })
        }).catch(()=>{
          this.$message.info("名字错误");
        })


      }
    }
  }
</script>

<style scoped>

</style>
