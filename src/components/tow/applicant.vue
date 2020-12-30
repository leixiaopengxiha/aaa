<template>
  <div class="Applicant">
    <div class="Applicanttop">产品信息</div>
    <div class="Applicanttow">
      <div class="jee">
        <div class="red je">*</div>产品型号:
      </div>
      <div>
        <el-radio-group v-model="radio">
          <el-radio :label="3">cas</el-radio>
          <el-radio :label="6">sms</el-radio>
          <el-radio :label="9">其他</el-radio>
        </el-radio-group>
      </div>
    </div>
    <!-- input框 -->
    <div class="Applicanttow">
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>产品名称
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>版本型号/型号版本号
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>产地
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>原认定产品型号
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>原入网产品正书编号
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>企业标准备案单位
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>执行国家(行业)标准名称
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>执行国家(行业)标准编号
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
    </div>
   <div class=" Applicanttow">
      <!-- 部件  没写-->
    <div class="Applicanttow">
      <div class="jee">
        <div class="red je">*</div>部件
      </div>
      <div>
        +
      </div>
    </div>
    <!-- 中间input  -->
    <div class="Applicanttow yyy">
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>邮件名称
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>邮件型号
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>生产厂家
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
     
    </div>
     <!-- 部件  没写-->
    <div class="Applicanttow">
      <div class="jee">
        <div class="red je">*</div>生产设备
      </div>
      <div>
        +
      </div>
    </div>
    <!--  -->
     <div class="Applicanttow yyy">
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>生产设备产品名称
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>生产设备型号
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>生产厂家
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
     
    </div>
      <!-- 部件  没写-->
    <div class="Applicanttow">
      <div class="jee">
        <div class="red je">*</div>检测设备
      </div>
      <div>
        +
      </div>
    </div>
    <!--  -->
     <div class="Applicanttow yyy">
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>测试设备
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>测试设备型号
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>生产厂家
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
     </div>
   </div>
    <!-- 打印按钮 -->
    <div class=" yuyu"><el-button type="primary">打印申请书</el-button></div>
    <div class="ytyt">请下载打印并盖章扫描上传</div>
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
      // 上传文件
       fileList: [],
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
}
.Applicanttop {
  height: 30px;
  line-height: 30px;
  width: 90%;
  border-bottom: 1px solid #cccccc;
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
  /* margin-left: 10px; */
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
  margin-left: 5%;
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
</style>

