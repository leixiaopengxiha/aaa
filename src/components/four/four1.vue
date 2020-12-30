<template>
  <div class="about">
     <!-- input框 -->
    <div class="Applicanttow">
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>企业名称
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>企业组织机构代码
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>所在区域
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>企业成立时间
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>企业办公地址
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>邮编
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>工商注册登记号或受理号
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
      <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>企业注册地址
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
       <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>法人职务
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
          <div class="red ji">*</div>法人电话
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
       <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>联系人职务
        </div>
        <div class="inp">
          <el-input v-model="form.name"></el-input>
        </div>
      </div>
       <div class="boxinp">
        <div class="jii">
          <div class="red ji">*</div>联系人
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
    <!-- 提交按钮 -->
    <div class=" yuyu">提交</div>
  </div>
</template>
<script>
export default {
  name: 'Four1',
  data() {
    return {
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
      
    }

}
</script>
<style scoped>
*{
  padding: 0;
  margin: 0; 
  overflow: hidden;
}
.about{
  margin-top: 20px;
    margin-left: 8%;
}
.yuyu{
       color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
    padding: 15px;
    width: 70px;
    height: 9px;
    margin-left: 501px;
    margin-top: 25px;
    text-align: center;
    line-height: 9px;
    border-radius: 5px;
        margin-top: 30px;
    margin-left: 40%;
    /* border: 1px red solid; */

}

  .Applicanttop {
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #cccccc;
}
.boxinp{
    width: 40%;
    margin-left: 5%;
    display: inline-block;
  }
  .inp{
    margin-left: 10px;
    width: 200px;
  }
  .ji{
    float: right;
    left: 0;
    line-height: 35px;
    text-align: right;
  }
  .jii{
    float: left;
    left: 0;
    line-height: 30px;
    width: 150px;
    text-align: right;
    margin-right: 10px;
    font-size: 10px;
    color: #606266;
  }
  .red{
    color: red;
  }
  .bao{
    margin-top: 3%;
    margin-left: 40%;
  }
</style>

