<template>
  <div id="Layout">
    <!--通过 row 和 col assembly，并通过 col 组件的 span 属性我们就可以自由地组合布局。-->
    <!--<el-col>中span后面数值24是代表一整行占满。<el-col>中span数值代表，占每一行的比例。比如12代表占一行的一半-->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">el-col:span后面数值24是代表一整行占满。</div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple-dark">span等于12说明：占一半</div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">span等于12说明：占一半</div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple-dark">span等于8说明：占三分之一</div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple-light">span等于16说明：占三分之二</div>
      </el-col>
    </el-row>
    <!--Row assembly 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。-->
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">提供gutter属性来指定每一栏之间的间隔，默认间隔为 0。</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">这里设置的是20</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">每一个el-col都间隔20px</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">是属性gutter设置</div>
      </el-col>
    </el-row>
    <!--通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。<-->
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。</div>
      </el-col>
      <el-col :span="6" offset="6">
        <div class="grid-content bg-purple">offset的值大小，与span的值比较。比如一个span是6，offest=6,就移动一个栏位</div>
      </el-col>
    </el-row>

    <!--将 type 属性赋值为 'flex'，可以启用 flex 布局，并可通过
    justify 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。-->
    <el-row type="flex" class="row-bg" :gutter="10">
      <el-col :span="6">
        <div class="grid-content bg-purple">把一行分成4个，但是只有三个el-col</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">通过看这个三个的布局，来体验flex的效果</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">将 type 属性赋值为 'flex'，可以启用 flex 布局，</div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6">
        <div class="grid-content bg-purple">并可通过 justify 属性来指定 start, center, end, space-between, space-around
          其中的值来定义子元素的排版方式。
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">这一行是center属性</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">这一行是end属性属性</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">space-between</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">space-around</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <!--xs:代表超小屏 sm 代表：小屏设备  md:中屏设备  lg：大屏设备 xl=超大屏-->
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light">参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。</div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" hidden-lg-and-down>
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <!--Element 额外提供了一系列类名，用于在某些条件下隐藏元素。这些类名可以添加在任何 DOM 元素或自定义组件上。如果需要，请自行引入以下文件：  import 'element-ui/lib/theme-chalk/display.css';-->
    <!--hidden-xs-only - 当视口在 xs 尺寸时隐藏
        hidden-sm-only - 当视口在 sm 尺寸时隐藏
        hidden-sm-and-down - 当视口在 sm 及以下尺寸时隐藏
        hidden-sm-and-up - 当视口在 sm 及以上尺寸时隐藏
        hidden-md-only - 当视口在 md 尺寸时隐藏
        hidden-md-and-down - 当视口在 md 及以下尺寸时隐藏
        hidden-md-and-up - 当视口在 md 及以上尺寸时隐藏
        hidden-lg-only - 当视口在 lg 尺寸时隐藏
        hidden-lg-and-down - 当视口在 lg 及以下尺寸时隐藏
        hidden-lg-and-up - 当视口在 lg 及以上尺寸时隐藏
        hidden-xl-only - 当视口在 xl 尺寸时隐藏-->
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="2">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="10" class="hidden-sm-and-up"><!--当尺寸大于SM的尺寸就隐藏-->
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="10">
        <div class="grid-content bg-purple">Element 额外提供了一系列类名，用于在某些条件下隐藏元素。这些类名可以添加在任何 DOM 元素或自定义组件上。</div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="2" hidden-lg-and-down>
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import 'element-ui/lib/theme-chalk/display.css'

  export default {
    name: 'Layout'
  }
</script>

<style scoped>

  .el-row {
    margin-bottom: 20px;
  }

  :last-child {
    margin-bottom: 0;
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
