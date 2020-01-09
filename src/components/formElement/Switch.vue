<template>
  <div>
    <elo-row>
      <el-col :span="24">这是基础用法。el-switch,开关。绑定v-model到一个Boolean类型的变量。可以使用active-color属性与inactive-color属性来设置开关的背景色。
      </el-col>
      <el-col :span="24">
        <el-switch v-model="value"
                   @change="handleSwitch"
                   active-color="#13ce66"
                   inactive-color="#ff4949">
        </el-switch>
      </el-col>
    </elo-row>


    <el-row>
      <el-col :span="24">使用active-text属性与inactive-text属性来设置开关的文字描述。</el-col>
      <el-col :span="24">
        <el-switch v-model="sex"
                   @change="handleSwitch"
                   active-text="男"
                   inactive-text="女"
                   active-color="#13ce66"
                   inactive-color="#ff4949">
        </el-switch>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">设置active-value和inactive-value属性，接受Boolean, String或Number类型的值。</el-col>
      <el-col :span="24">
        <el-switch v-model="sex"
                   @change="handleSwitch"
                   active-value="男"
                   inactive-value="女"
                   active-text="男"
                   inactive-text="女"
                   active-color="#13ce66"
                   inactive-color="#ff4949">
        </el-switch>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Switch',
    data () {
      return {
        value: true,
        sex: '',
      }
    },
    methods: {
      handleSwitch (val) {
        console.log(val)
      }
    }
  }
</script>

<style scoped>

</style>
