<template>
  <div class="Applicant">
    <div class="Applicanttop">变更申请书</div>
   
    <!-- input框 -->
    <div class="Applicanttow">
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>原企业名称
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>现企业名称
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>企业地址
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>统一社会信用代码
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>法人姓名
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>联系人姓名
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>联系人电话
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
     
    </div>
   <!-- 文本框 -->
    <div class="Applicanttop">申请内容</div>
 <div class="shenqings">
        <div>按照监管部门批准，我单位将企业名称由</div>
        <div><input type="text"></div>
        <div>变更为</div>
        <div><input type="text"></div>
        <div>，现申请将上述入网认定书做相对应的企业名称变更</div>
    </div>
   
    <!-- 打印按钮 -->
    <div class=" yuyu"><el-button type="primary">打印申请书</el-button></div>
    <div class="ytyt">请下载打印并盖章扫描上传</div>
<!-- 选择正书 -->
 <div class="Applicanttop">选择证书</div>
 <div class="biaoge">
      <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="证书号"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="产品名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="发证事间"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column
      prop="address"
      label="企业名称"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column
      prop="address"
      label="有效时间"
      show-overflow-tooltip>
    </el-table-column>
    
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>
 </div>
   
      <!-- 产品信息 -->
       <div class="Applicanttop">产品信息</div>

        <!-- 上传1 -->
       <div class="shang">
          <div>
          <div class="Applicanttow">
          <span class="red ">*</span>入网认定申请书
        </div>
        </div>
        <div class="Applicanttow">
          <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-change="handleChange"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
        </div>
       </div>
        <!-- 上传1 -->
       <div class="shang">
          <div>
          <div class="Applicanttow">
          <span class="red ">*</span>入网认定申请书
        </div>
        </div>
        <div class="Applicanttow">
          <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-change="handleChange"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
        </div>
       </div>
       
       <div>+点击增加其他文件</div>

         <div class=" yuyu"><el-button type="primary">提交</el-button></div>
  </div>
</template>
<script>
export default {
  name: 'Applicant',
  data() {
    return {
        // 表格
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: [],
      // 上传文件
       fileList: [],
    //    单选框
      radio: 3,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
    methods: {
        // 表格事件
        toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
        // 上传
      handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
      }
    }
  
}
</script>
<style scoped>
* {
  overflow: hidden;
}
.Applicant{
  /* margin-top: 60px; */
    margin-top: 22px;
    margin-left: 8%;
}
.shang{
  margin-top: 15px;
}
.yuyu{
        margin-top: 30px;
    margin-left: 40%;
}
.ytyt{
  margin-top: 1%;
  text-align: center;
  width: 92%;
}
.Applicanttop {
  height: 30px;
  line-height: 30px;
  width: 90%;
  border-bottom: 1px solid #cccccc;
  margin-top: 20px;
}
.Applicanttow {
  margin-top: 10px;
}
.boxinpp {
  width: 35%;
  height: 42px;
  /* margin-left: 5%; */
  display: inline-block;
}
.yyy{
  position: relative;
}
.boxinppp {
      position: absolute;
    top: 3px;
    right: -33px;
    width: 35%;
    height: 42px;
    /* margin-left: 5%; */
    display: inline-block;
}

.boxinp {
  width: 40%;
  height: 42px;
  margin-left: 5%;
  display: inline-block;
}
.inp {
  margin-left: 10px;
  width: 200px;
}
.ji {
  float: right;
  left: 0;
  line-height: 35px;
  text-align: right;
}
.jii {
  float: left;
  left: 0;
  line-height: 30px;
  width: 150px;
  text-align: right;
  margin-right: 10px;
  font-size: 10px;
  color: #606266;
}
.je {
  float: right;
  left: 0;
  line-height: 20px;
  text-align: right;
}
.jee {
  float: left;
  left: 0;
  /* line-height: 30px; */
  width: 150px;
  text-align: right;
  margin-right: 10px;
  font-size: 10px;
  color: #606266;
}
.jcc {
  float: left;
  left: 0;
  /* line-height: 30px; */
  width: 100px;
  text-align: right;
  margin-right: 10px;
  font-size: 10px;
  color: #606266;
}
.red {
  color: red;
}
.boxinp[data-v-077dc6af] {
    /* width: 40%; */
    height: 42px;
    margin-left: 5%;
    display: inline-block;
}
.wenbenkuang{
    width: 70%;
    margin-top: 20px;
}
.biaoge{
    width: 91%;
    border: 1px #ccc solid;
    margin-top: 25px;
}
 .shenqings{
         width: 90%;
    border: 1px solid #cccccc;
    margin-top: 25px;
    /* margin-left: 2%; */
    font-size: 13px;
    text-align: center;
    padding: 25px 0px;
  }
  .shenqings>div{
      display: inline-block;
  }
  .shenqings>div>input{
      border: none;
      width: 60px;
  }
</style>

