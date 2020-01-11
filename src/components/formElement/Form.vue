<template>
  <el-form ref="ruleForm" status-icon="" :model="ruleForm" :rules="rules" class="demo-ruleForm" label-width="200px">
    <el-form-item label="姓名" prop="name">
      <el-input v-model="ruleForm.name" style="width: 200px;float: left"></el-input>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input  v-model="ruleForm.age"  style="width: 200px;float: left"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="ruleForm.password" autocomplete="off"  style="width: 200px;float: left"></el-input>
    </el-form-item>
    <el-form-item label="再次输入密码" prop="checkPassword">
      <el-input type="password" v-model="ruleForm.checkPassword" autocomplete="off"  style="width: 200px;float: left"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>

  export default {
    name: 'Form',
    data () {
      var checkAge=(rule,value,callback)=>{
          if(!value){
            return callback(new Error('年龄不能为空'));
          }
          setTimeout(()=>{
            if (!Number.isInteger(value)) {
              callback(new Error('请输入数字值'));
            } else {
              if (value < 18) {
                callback(new Error('必须年满18岁'));
              } else {
                callback();
              }
            }
          },1000)
        };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPassword !== '') {
            this.$refs.ruleForm.validateField('checkPassword');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          name: '',
          age:1,
          password: '',
          checkPassword:''
        },
        rules: {
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur',},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          age:[
            {required: true, message: '请输入年龄', trigger: 'blur',},
          ],
          password:[
            {required: true, message: '请输入密码', trigger: 'blur',},
            {validator:validatePass,trigger:'blur'}
          ],
          checkPassword:[
            {required: true, message: '请输入再次密码', trigger: 'blur',},
            {validator:validatePass2,trigger:'blur'},
          ]
        }
      }
    },
  }
</script>

<style scoped>
  @import url("https://unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");
</style>
