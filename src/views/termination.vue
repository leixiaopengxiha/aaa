<template>
  <div class="termination">
    <div class="headtop">终止入网申请</div>
    <!-- 搜索top -->
    <div class="sotab">
      <div class="soinp">
        <input type="text" placeholder="请输入申请好" />
      </div>
      <div class="soinp">
        <input type="text" placeholder="请输入型号" />
      </div>
      <div class="soinp">
        <input type="text" placeholder="请选择状态" />
      </div>
      <div class="soinp butn">搜索</div>
      <div class="soinp butn butns">搜索</div>
    </div>
    <!-- 表格 -->
    <div class="sobiaoge">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="申请号" >
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="产品名称">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="产品型号" >
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="日期" style="text-align:center;">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态" style="text-align:center;">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="变更" style="text-align:center;">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="操作" style="text-align:center;">
          <template slot-scope="scope">
            <el-button size="mini" style="width:80px;height:25px;" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="fenye">
        <div class="fenyeleft"></div>
        <div class="fenyeright"></div>
        <el-pagination
  background
  layout="prev, pager, next"
  :total="70">
</el-pagination>
    </div>
  
  </div>
</template>
<script>
export default {
    
  data() {
    return {
      // 表格的数据
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      // input
      form: {
        name: ''
      }
    }
  },
  methods: {
    // 查看
    handleEdit(index, row) {
      console.log(index, row)
    }
  }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-size: 13px;
  
}
.fenye{
   width: 50%;
   margin-left: 620px;
   margin-top: 20px;
   position: relative;
}
.fenyeleft{
   position: absolute;
    width: 18px;
    height: 30px;
    /* border: 1px red solid; */
    left: 19px;
    top: 0;
    background: #ffffff;

}
.fenyeright{
    position: absolute;
    width: 18px;
    height: 30px;
    /* border: 1px red solid; */
        left: 339px;
    top: 0;
    background: #ffffff;
}
.sobiaoge {
  /* width: 80%;
  margin-left: 5%; */
  margin-top: 15px;
  border: 1px solid #cccccc;
  padding: 5px;
}
.headtop {
  width: 100%;
  height: 25px;
  position: absolute;
   top: 50px;
  left: 183px;
  font-size: 13px;
  padding-left: 8px;
  color: #ffffff;
  line-height: 20px;
  background: #cccccc;
  padding-left: 8px;
}
.termination {
  margin-top: 60px;
}
.soinp {
  display: inline-block;
  margin-left: 50px;
}
.soinp > input {
  /* border: none; */
  height: 25px;
  /*去除阴影*/
  box-shadow: none;
  /*聚焦input的蓝色边框*/
  outline: none;
  /*textarea 禁止拖拽*/
  resize: none;
  /*去除边框*/
  /* border: none;  */
}
.butn {
  width: 80px;
  height: 30px;
  background-color: #409eff;
  color: #ffffff;
  text-align: center;
  line-height: 25px;
  margin-left: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.butns {
  background: #cccccc;
}
</style>