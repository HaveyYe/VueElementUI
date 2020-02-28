<template>
  <div>
    <el-row>
      <e-col>
        <span>设置active属性，接受一个Number，表明步骤的 index，从 0 开始。需要定宽的步骤条时，设置space属性即可</span>
        <span>它接受Boolean，单位为px，如果不设置，则为自适应。设置finish-status属性可以改变已经完成的步骤的状态。</span>
        <br/>
        <el-steps :active="active" finish-status="success">
          <el-step title="步骤1" icon="el-icon-edit"></el-step>
          <el-step title="步骤2" icon="el-icon-upload"></el-step>
          <el-step title="步骤3" icon="el-icon-picture"></el-step>
        </el-steps>
        <el-button type="primary" @click="next">下一步</el-button>
      </e-col>
    </el-row>
    <el-row>
      <e-col>
        <span>只需要在el-steps元素中设置direction属性为vertical即可。</span>
        <br/>
        <el-steps :active="active" finish-status="success" direction="vertical">
          <el-step title="步骤1" icon="el-icon-edit"></el-step>
          <el-step title="步骤2" icon="el-icon-upload"></el-step>
          <el-step title="步骤3" icon="el-icon-picture"></el-step>
        </el-steps>
        <el-button type="primary" @click="next">下一步</el-button>
      </e-col>
    </el-row>
    <el-row>
      <e-col>
        <span>设置 simple 可应用简洁风格，该条件下 align-center / description / direction / space 都将失效。</span>
        <br/>
        <el-steps :active="active" finish-status="success" direction="vertical" simple>
          <el-step title="步骤1" icon="el-icon-edit"></el-step>
          <el-step title="步骤2" icon="el-icon-upload"></el-step>
          <el-step title="步骤3" icon="el-icon-picture"></el-step>
        </el-steps>
        <el-button type="primary" @click="next">下一步</el-button>
      </e-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'Step',
    data(){
      return{
        active:1,
      }
    },
    methods:{
      next() {
        if (this.active++ > 2) this.active = 0;
        alert(this.active)
      }
    }
  }
</script>

<style scoped>

</style>
