<template>
  <div>
    <el-row>
      <el-col>
        <span>基础用法：el-table :当el-table元素中注入data对象数组后，在el-table-column中用prop属性来对应对象中的键名即可填入数据，用label属性来定义表格的列名。可以使用width属性来定义列宽。stripe属性可以创建带斑马纹的表格。它接受一个Boolean，默认为false，设置为true即为启用。</span>
        <br/>
        <el-table
          :data="dataTable"
          style="width: 50%"
          stripe>
          <el-table-column
            prop="date"
            label="日期"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
          ></el-table-column>
          <el-table-column
            prop="address"
            label="地址"
          ></el-table-column>
        </el-table>
      </el-col>
      <el-col>
        <span>默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用border属性，它接受一个Boolean，设置为true即可启用。</span>
        <br/>
        <el-table
          :data="dataTable"
          style="width: 50%"
          border
          stripe>
          <el-table-column
            prop="date"
            label="日期"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
          ></el-table-column>
          <el-table-column
            prop="address"
            label="地址"
          ></el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <span>只要在el-table元素中定义了height属性，即可实现固定表头的表格，而不需要额外的代码。通过设置max-height属性为 Table 指定最大高度。此时若表格所需的高度大于最大高度，则会显示一个滚动条。</span>
        <br/>
        <el-table
          :data="dataTable"
          height="250"
          max-height="150"
          style="width: 50%"
          border
          stripe>
          <el-table-column
            prop="date"
            label="日期"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
          ></el-table-column>
          <el-table-column
            prop="address"
            label="地址"
          ></el-table-column>
        </el-table>
      </el-col>
      <el-col>
        <span> 固定列需要使用fixed属性，它接受 Boolean 值或者leftright，表示左边固定还是右边固定。</span>
        <br/>
        <el-table
          :data="dataTable"
          height="250"
          style="width: 50%"
          border
          stripe>
          <el-table-column
            fixed="left"
            prop="date"
            label="日期"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
          ></el-table-column>
          <el-table-column
            prop="address"
            label="地址"
          ></el-table-column>
        </el-table>
      </el-col>
      <el-col>
        <span>多级表头：只需要在 el-table-column 里面嵌套 el-table-column，就可以实现多级表头。</span>
        <br/>
        <el-table
          :data="tableData">
          <el-table-column
            prop="index"
            label="序号">
          </el-table-column>
          <el-table-column
            label="信息">
            <el-table-column
              prop="name"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="age"
              label="年龄">
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col>
        <span>Table 组件提供了单选的支持，只需要配置highlight-current-row属性即可实现单选。之后由current-change事件来管理选中时触发的事件，它会传入currentRow，oldCurrentRow。如果需要显示索引，可以增加一列el-table-column，设置type属性为index即可显示从 1 开始的索引号。</span>
        <br/>
        <el-table
          ref="singleTable"
          :data="dataTable"
          highlight-current-row
          @current-change="handleCurrentChange">
          <el-table-column
            type="index"
            label="序号">
          </el-table-column>
          <el-table-column
            property="date"
            label="日期">
          </el-table-column>
          <el-table-column
            property="name"
            label="名字">
          </el-table-column>
          <el-table-column
            property="address"
            label="地址">
          </el-table-column>
        </el-table>
        <br/>
        <div>
          <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
          <el-button @click="setCurrent()">取消选择</el-button>
        </div>
      </el-col>
      <el-col>
        <span>多选：实现多选非常简单: 手动添加一个el-table-column，设type属性为selection即可；默认情况下若内容过多会折行显示，若需要单行显示可以使用show-overflow-tooltip属性，它接受一个Boolean，为true时多余的内容会在 hover 时以 tooltip 的形式显示出来。</span>
        <el-table
          ref="multipleTable"
          :data="dataTable"
          tooltip-effect="dark"
          style="width: 100%"

          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="日期"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip>
          </el-table-column>
        </el-table>
        <div>
          <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
          <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
      </el-col>

      <el-col>
        <span>排序：在列中设置sortable属性即可实现以该列为基准的排序，接受一个Boolean，默认为false。可以通过 Table 的default-sort属性设置默认的排序列和排序顺序。可以使用sort-method或者sort-by使用自定义的排序规则。如果需要后端排序，需将sortable设置为custom，同时在 Table 上监听sort-change事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。在本例中，我们还使用了formatter属性，它用于格式化指定列的值，接受一个Function，会传入两个参数：row和column，可以根据自己的需求进行处理。</span>
        <br/>
        <el-table
          :data="dataTable"
          :default-sort="{prop:'data',order:'descending'}">
          <el-table-column
            prop="date"
            label="日期"
            sortable></el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            sortable></el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            :formatter="formatter">
          </el-table-column>
        </el-table>
      </el-col>

      <el-col>
        <span>在列中设置filters filter-method属性即可开启该列的筛选，filters 是一个数组，filter-method是一个方法，它用于决定某些数据是否显示，会传入三个参数：value, row 和 column。</span>
        <br/>
        <el-table
          :data="dataTable">
          <el-table-column
            prop="date"
            label="日期"
            sortable
            :filters="[{text: '2020-01-11', value: '2020-01-11'}, {text: '2020-01-12', value: '2020-01-12'}, {text: '2020-01-13', value: '2020-01-13'}]"
            :filter-method="filterHandler"></el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            sortable></el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            :formatter="formatter">
          </el-table-column>
        </el-table>
      </el-col>

      <el-col>
        <span>通过设置 type="expand" 和 Scoped slot 可以开启展开行功能，el-table-column 的模板会被渲染成为展开行的内容，展开行可访问的属性与使用自定义列模板时的 Scoped slot 相同。</span>
        <br/>
        <el-table
          :data="tabelDateExpand">
          <el-table-column
            type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                  <span>{{props.row.name}}</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                  <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                  <span>{{ props.row.shopId }}</span>
                </el-form-item>
                <el-form-item label="商品分类">
                  <span>{{ props.row.category }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            prop="id"
            label="商品ID">
          </el-table-column>
          <el-table-column
            label="商品名称"
            prop="name">
          </el-table-column>
          <el-table-column
            prop="desc"
            label="描述">
          </el-table-column>
        </el-table>
      </el-col>
      <el-col>
        <span>将show-summary设置为true就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过sum-text配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用summary-method并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中，具体可以参考本例中的第二个表格。</span>
        <br/>
        <el-table
        :data="sumData"
        show-summary>
          <el-table-column
          prop="name"
          laebl="名字"
          ></el-table-column>
          <el-table-column
          prop="marks"
          sortable
          label="分数"></el-table-column>
        </el-table>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Table',
    data () {
      return {
        sumData:[
          {name:'A',marks:'90'},
          {name:'AB',marks:'93'},
          {name:'AEFCD',marks:'920'},
          {name:'AGH',marks:'930'},
          {name:'AZX',marks:'903'},

        ],
        dataTable: [
          {date: '2020-01-11', name: 'A', address: '杭州市滨江区A'},
          {date: '2020-01-12', name: 'B', address: '杭州市滨江区B'},
          {date: '2020-01-13', name: 'C', address: '杭州市滨江区C'},
          {date: '2020-01-14', name: 'D', address: '杭州市滨江区D'}
        ],
        tableData: [
          {index: 1, name: '王强', age: 17},
          {index: 2, name: '王强A', age: 14},
          {index: 3, name: '王强B', age: 23},
          {index: 4, name: '王强C', age: 34},
        ],
        currentRow: null,
        multipleSelection: [],
        tabelDateExpand: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }]
      }
    },
    methods: {
      tableRowClassName ({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row'
        } else if (rowIndex === 3) {
          return 'success-row'
        }
        return ''
      },
      handleCurrentChange (val) {
        console.log(val)
        /*console.log(currentRow);
        console.log(oldCurrentRow);*/
        this.currentRow = val
        // this.$message.warning("现在"+currentRow+"过去："+oldCurrentRow);
      },
      setCurrent (row) {
        this.$refs.singleTable.setCurrentRow(row)
      },
      toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      formatter (row, column) {
        return row.address
      },
      filterHandler (value, row, column) {
        const property = column['property']
        return row[property] === value
      }

    }
  }
</script>

<style scoped>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
