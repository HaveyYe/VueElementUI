<template>
  <div>
    <el-row class="el-row">
      <el-col :span="24">常规使用。可以用上v-for指令增加el-option</el-col>
      <el-col :span="24" class="bg-purple-light">
        <el-select v-model="select_value" @change="handelChange">
          <el-option v-for="option in options" :key="option.name" :label="option.value"
                     :value="option.value"></el-option>
        </el-select>
      </el-col>
    </el-row>

    <el-row class="el-row">
      <el-col :span="24">可以对该option加上disable。导致不能选.加上clearable可以清空选项。但是注意只能是单选</el-col>
      <el-col :span="24" class="bg-purple-light">
        <el-select v-model="select_value" @change="handelChange" clearable>
          <el-option v-for="option in options" :key="option.name" :label="option.name" :value="option.value"
                     :disabled="option.disabled"></el-option>
        </el-select>
      </el-col>
    </el-row>

    <el-row class="el-row">
      <el-col :span="24">基础多选 为el-select设置multiple属性即可启用多选，此时v-model的值为当前选中值所组成的数组。默认情况下选中值会以 Tag
        的形式展现，你也可以设置collapse-tags属性将它们合并为一段文字。
      </el-col>
      <el-col :span="12" class="bg-purple-light">
        <el-select v-model="select_multiple_vale" @change="handelChange" multiple>
          <el-option v-for="option in options" :key="option.name" :label="option.name"
                     :value="option.value"></el-option>
        </el-select>
      </el-col>
      <el-col :span="12" class="bg-purple-light">
        <el-select v-model="select_multiple_vale" @change="handelChange" multiple collapse-tags>
          <el-option v-for="option in options" :key="option.name" :label="option.name"
                     :value="option.value"></el-option>
        </el-select>
      </el-col>
    </el-row>

    <el-row class="el-row">
      <el-col :span="24">自定义模板：将自定义的 HTML 模板插入el-option的 slot 中即可。</el-col>
      <el-col :span="24" class="bg-purple-light">
        <el-select v-model="select_value" @change="handelChange" clearable>
          <el-option v-for="option in options" :key="option.name" :label="option.name" :value="option.value">
            <span style="float:left">{{option.name}}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ option.value }}</span>
          </el-option>
        </el-select>
      </el-col>
    </el-row>

    <el-row class="el-row">
      <el-col :span="24">分组选择。使用el-option-group对备选项进行分组，它的label属性为分组名</el-col>
      <el-col :span="24" class="bg-purple-light">
        <el-select v-model="select_value" @change="handelChange" clearable>
          <el-option-group v-for="label_option in label_options" :key="label_option.name" :label="label_option.label"
                           :value="label_option.value">
            <el-option v-for="option in label_option.options" :key="option.name" :label="option.value"
                       :value="option.value"></el-option>
          </el-option-group>
        </el-select>
      </el-col>
    </el-row>

    <el-row class="el-row">
      <el-col :span="24">可以搜索。为el-select添加filterable属性即可启用搜索功能默认情况下，Select
        会找出所有label属性包含输入值的选项。如果希望使用其他的搜索逻辑，可以通过传入一个filter-method来实现。filter-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。
      </el-col>
      <el-col :span="24" class="bg-purple-light">
        <el-select v-model="select_value" @change="handelChange" clearable filterable>
          <el-option v-for="option in options" :key="option.name" :label="option.name" :value="option.value">
            <span style="float:left">{{option.name}}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ option.value }}</span>
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row class="el-row">
      <el-col :span="24">
        创建条目。使用allow-create属性即可通过在输入框中输入文字来创建新的条目。注意此时filterable必须为真。本例还使用了default-first-option属性，在该属性打开的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位
      </el-col>
      <el-col :span="24" class="bg-purple-light">
        <el-select v-model="select_value" @change="handelChange" clearable filterable allow-create="true" default-first-option multiple>
          <el-option v-for="option in options" :key="option.name" :label="option.name" :value="option.value">
            <span style="float:left">{{option.name}}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ option.value }}</span>
          </el-option>
        </el-select>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Select',
    data () {
      return {
        select_value: '',
        select_multiple_vale: [],
        options: [
          {name: '学习', value: 'java', disabled: false},
          {name: '爱好', value: '玩耍', disabled: true},
          {name: '工作', value: '编码', disabled: false},
        ],
        label_options: [
          {
            label: '一线城市',
            options: [
              {name: 'shanghai', value: '上海'},
              {name: 'beijing', value: '北京'},
              {name: 'shenzheng', value: '深圳'},
              {name: 'guangzhou', value: '广州'},
            ]
          },
          {
            label: '二线城市',
            options: [
              {name: 'hangzhou', value: '杭州'},
              {name: 'chengdu', value: '成都'},
              {name: 'nanjing', value: '南京'},
              {name: 'wuhan', value: '武汉'},
            ]
          },

        ]
      }
    },
    methods: {
      handelChange (val) {
        console.log(this.select_value === val)
      }
    }
  }
</script>

<style scoped>

</style>
