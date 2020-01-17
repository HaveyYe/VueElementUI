<template>
    <div>
      <el-row>
        <el-col>
          <span>展示新消息数量。 定义value属性，它接受Number或者String。</span>
          <br/>
          <el-badge class="item"
          :value="12" type="primary">
            <el-button>评论</el-button>
          </el-badge>
          <el-badge class="item"
            :value="12" type="warning">
            <el-button>未读消息</el-button>
          </el-badge>
          <el-badge class="item"
            :value="12" type="success">
            <el-button>已读</el-button>
          </el-badge>
          <el-badge class="item"
            :value="12">
            <el-button>查看</el-button>
          </el-badge>

          <el-dropdown>
            <span class="el-dropdown-link">
              点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix">
                评论
                <el-badge class="mark" :value="12" />
              </el-dropdown-item>
              <el-dropdown-item class="clearfix">
                回复
                <el-badge class="mark" :value="3" />
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col>
          <span>由max属性定义，它接受一个Number，需要注意的是，只有当value为Number时，它才会生效。</span>
          <br/>
          <el-badge
          :value="200" :max="99" class="item">
            <el-button>评论</el-button>
          </el-badge>
        </el-col>
        <el-col>
          <span>除了数字外，设置is-dot属性，它接受一个Boolean。</span>
          <br/>
          <el-badge is-dot class="item">数据查询</el-badge>
          <el-badge is-dot class="item">
            <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
          </el-badge>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: 'Badge'
  }
</script>

<style scoped>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
