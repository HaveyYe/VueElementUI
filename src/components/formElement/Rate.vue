<template>
  <div>
    <el-row>
      <el-col>
        <span>基础用法：分默认被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色）。三个等级所对应的颜色用colors属性设置，而它们对应的两个阈值则通过 low-threshold 和 high-threshold 设定。你也可以通过传入颜色对象来自定义分段，键名为分段的界限值，键值为对应的颜色。</span>
        <el-rate v-model="value" @change="handleChage"
                 :colors="colors"></el-rate>
      </el-col>

      <el-col>
        <span>辅助文字 ：为组件设置 show-text 属性会在右侧显示辅助文字。通过设置 texts 可以为每一个分值指定对应的辅助文字。texts 为一个数组，长度应等于最大值 max。</span>
        <el-rate v-model="value"
                 @change="handleChage"
                 :colors="colors"
                 show-text
                 :texts="texts"></el-rate>
      </el-col>
      <el-col class="bg-purple-dark">
        <span>可以使用icon-classess 设置icon-classes属性可以自定义不同分段的图标。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名。本例还使用void-icon-class指定了未选中时的图标类名。</span>
        <el-rate
          v-model="value1"
          :icon-classes="iconClasses"
          void-icon-class="icon-rate-face-off"
          :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
      </el-col>
      <el-col>
        <span>为组件设置 disabled 属性表示组件为只读，支持小数分值。此时若设置 show-score，则会在右侧显示目前的分值。可以提供 score-template 作为显示模板，模板为一个包含了 {value} 的字符串，{value} 会被解析为分值。</span>
        <el-rate
          v-model="value"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Rate',
    data () {
      return {
        value1:null,
        value: 2,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
        texts: ['很差', '较差', '一般', '较满意', '满意'],
        iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
      }
    },
    methods: {
      handleChage (vale) {
        this.$message({
          showClose: true,
          message: vale,
          type: 'success'
        })
      }
    }
  }
</script>

<style scoped>

</style>
