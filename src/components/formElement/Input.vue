<template>
  <div>
    <el-row class="row-bg">
      <el-col :span="24" class="bg-purple">v-model绑定值。clearable可以增加在后面加上清空按钮</el-col>
      <el-col :span="12" class="bg-purple-dark">
        <el-input v-model="name" placeholder="请输入内容" clearable></el-input>
      </el-col>
    </el-row>

    <el-row class="row-bg">
      <el-col :span="24" class="bg-purple">密码框。关键字：show-password</el-col>
      <el-col :span="12" class="bg-purple-dark">
        <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
      </el-col>
    </el-row>

    <el-row class="row-bg">
      <el-col :span="24" class="bg-purple">可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。
      </el-col>
      <el-col :span="12">
        <el-input v-model="icon" placeholder="prefix-icon放在前面" prefix-icon="el-icon-date"></el-input>
        <el-input v-model="icon" placeholder="suffix-icon放在后面" suffix-icon="el-icon-date"></el-input>
      </el-col>
      <el-col :span="12">
        <el-input v-model="icon" placeholder="slot:prefix-icon放在前面">
          <i slot="prefix" class="el-input--prefix el-icon-date"></i>
        </el-input>
        <el-input v-model="icon" placeholder="slot:suffix-icon放在后面">
          <i slot="suffix" class="el-input--suffix el-icon-date"></i>
        </el-input>
      </el-col>
    </el-row>

    <el-row class="el-row">
      <el-col :span="24">
        用于输入多行文本信息，通过将 type 属性的值指定为 textarea。
        通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 autosize 还可以设定为一个对象，指定最小行数和最大行数
      </el-col>
      <el-col :span="24">
        <el-input type="textarea" :autosize="{minRows:2,maxRows:4}" v-model="textarea"></el-input>
      </el-col>
    </el-row>

    <el-row class="el-row">
      <el-col :span="24">
        复合型输入框：可通过 slot 来指定在 input 中前置或者后置内容。
      </el-col>
      <el-col :span="24">
        <el-input v-model="fixTextarea" placeholder="这是复合型输入框">
          <template slot="prepend">Http://</template>
        </el-input>
        <el-input v-model="fixTextarea" placeholder="这是复合型输入框">
          <template slot="append">.com</template>
        </el-input>
      </el-col>
      <el-col :span="24">
        <el-input v-model="fixTextarea" placeholder="这是复合型输入框" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择" style=" width: 130px; background-color: #fff;">
            <el-option v-for="select_input in select_inputs" :label="select_input" :value="select_input"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24" class="bg-purple-light">autocomplete 是一个可带输入建议的输入框组件，fetch-suggestions 是一个返回输入建议的方法属性，</el-col>
      <el-col :span="24">
        <el-autocomplete class="inline-input" v-model="state1" :fetch-suggestions="querySearch" placeholder="请输入内容"
                         @select="handleSelect"></el-autocomplete>
      </el-col>
      <el-col :span="24" class="bg-purple-light">使用scoped slot自定义输入建议的模板。该 scope 的参数为item，表示当前输入建议对象。</el-col>
      <el-col :span="24">
        <el-autocomplete popper-class="my-autocomplete" v-model="state" :fetch-suggestions="querySearch"
                         placeholder="请输入内容" @select="handleSelect">
          <i class="el-icon-edit el-input_icon" slot="suffix" @click="handleIconClick"></i>
          <template slot-scope="{ item }"><!--这是自定义的模板-->
            <div class="name">{{item.value}}</div>
            <span class="addr">{{item.address}}</span>
          </template>
        </el-autocomplete>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        限制长度：maxlength 和 minlength 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。对于类型为 text 或 textarea 的输入框，在使用 maxlength 属性限制最大输入长度的同时，可通过设置 show-word-limit 属性来展示字数统计。
      </el-col>
      <el-col class="bg-purple">
        <el-input   :maxlength="10" show-word-limit v-model="maxLength"></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Input',
    data () {
      return {
        name: '',
        password: '',
        icon: '',
        textarea: '',
        fixTextarea: '',
        select_inputs: ['姓名', '民族', '性别'],
        select: '',
        state1: '',
        restaurants: [],
        state: '',
        maxLength:''
      }
    },
    methods: {
      querySearch (string, cb) {
        var restaurants = this.restaurants
        var results = string ? restaurants.filter(this.createFilter(string)) : restaurants
        cb(results)
      },
      createFilter (string) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(string.toLowerCase()) === 0)
        }
      },
      loadAll () {
        return [
          {'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号'},
          {'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号'},
          {'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113'},
          {'value': '泷千家(天山西路店)', 'address': '天山西路438号'},
          {'value': '胖仙女纸杯蛋糕（上海凌空店）', 'address': '上海市长宁区金钟路968号1幢18号楼一层商铺18-101'},
          {'value': '贡茶', 'address': '上海市长宁区金钟路633号'}
        ]
      },
      handleSelect (item) {
        console.log(item)
      },
      handleIconClick (ev) {
        console.log(ev)
      }
    },
    mounted () {
      this.restaurants = this.loadAll()
    }
  }
</script>

<style scoped>
  .my-autocomplete {
  }
  li {
    line-height: normal;
    padding: 7px;
  }
  .name {
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .addr {
    font-size: 12px;
    color: #b4b4b4;
  }

  .highlighted .addr {
    color: #ddd;
  }
</style>
