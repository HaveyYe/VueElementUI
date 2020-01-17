<template>
  <div>
    <el-row>
      <el-col>
          <span>
            通过 shape 和 size 设置头像的形状和大小。
          </span>
        <br/>
        <el-avatar :src="circleUrl"></el-avatar>
        <el-avatar shape="square" :src="circleUrl"></el-avatar>
      </el-col>

      <el-col>
          <span>
           支持三种类型：图标、图片和字符
          </span>
        <br/>
        <el-avatar icon="el-icon-edit"></el-avatar>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <el-avatar>user</el-avatar>
      </el-col>

      <el-col>
          <span>
           当展示类型为图片的时候，图片加载失败的 fallback 行为
          </span>
        <br/>
        <el-avatar :size="60" src="https://empty" @error="errorHandle">
          <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
        </el-avatar>
      </el-col>

      <el-col>
          <span>
          当展示类型为图片的时候，使用 fit 属性定义图片如何适应容器框，同原生 object-fit。
          </span>
        <br/>
        <div v-for="fit in fits" :key="fit">
          <span>{{fit}}</span>
          <el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Avatar',
    data () {
      return {
        circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        fits:['fill','contain','cover','none','scale-down']
      }
    },
    methods: {
      errorHandle () {
        return true
      }
    }
  }
</script>

<style scoped>

</style>
