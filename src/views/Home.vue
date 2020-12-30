<template>
 <div class="home">
   <div class="headtop">补全企业信息</div>
    <el-form ref="form" :model="form" label-width="80px">
   <div class="boxinp">
    <div class="jii"><div class="red ji">*</div>企业名称</div>
     <div class="inp">
        <el-input v-model="form.name"></el-input>
 </div>
  </div>
  <div class="boxinp">
    <div class="jii"><div class="red ji">*</div>企业注册地址</div>
     <div class="inp">
        <el-input v-model="form.name"></el-input>
 </div>
  </div>
  <div class="boxinp">
    <div class="jii"><div class="red ji">*</div>所在区域</div>
     <div class="inp">
        <el-input v-model="form.name"></el-input>
 </div>
  </div>
   <div class="boxinp">
    <div class="jii"><div class="red ji">*</div>企业成立时间</div>
     <div class="inp">
     <el-input v-model="form.name"></el-input>
 </div>
  </div>
   <div class="boxinp">
    <div class="jii"><div class="red ji">*</div>企业办公地址</div>
     <div class="inp">
        <el-input v-model="form.name"></el-input>
 </div>
  </div>
    <div class="boxinp">
    <div class="jii"><div class="red ji">*</div>邮编</div>
     <div class="inp">
        <el-input v-model="form.name"></el-input>
 </div>
  </div>
  <div class="boxinp">
    <div class="jii"><div class="red ji">*</div>工商注册登记号或受理号</div>
     <div class="inp">
        <el-input v-model="form.name"></el-input>
 </div>
  </div>
   <div class="boxinp">
    <div class="jii"><div class="red ji">*</div>工商营业执照登记号</div>
     <div class="inp">
        <el-input v-model="form.name"></el-input>
 </div>
  </div>
 <div class="boxinp">
    
    <div class="jii"><div class="red ji">*</div>企业组织机构代码</div>
   <div class="inp">
        <el-input v-model="form.name"></el-input>
 </div>
  </div>

 <div class="boxinp">
    <div class="jii"><div class="red ji">*</div>法人姓名</div>
     <div class="inp">
        <el-input v-model="form.name"></el-input>
 </div>
  </div>
   <div class="boxinp">
    <div class="jii"><div class="red ji">*</div>法人职务</div>
     <div class="inp">
        <el-input v-model="form.name"></el-input>
 </div>
  </div>
   <div class="boxinp">
    <div class="jii"><div class="red ji">*</div>法人电话</div>
     <div class="inp">
        <el-input v-model="form.name"></el-input>
 </div>
  </div>
   <div class="boxinp">
    <div class="jii"><div class="red ji">*</div>联系人职务</div>
     <div class="inp">
        <el-input v-model="form.name"></el-input>
 </div>
  </div>
   <div class="boxinp">
    <div class="jii"><div class="red ji">*</div>联系人</div>
     <div class="inp">
        <el-input v-model="form.name"></el-input>
 </div>
  </div>
   <div class="boxinp">
    <div class="jii"><div class="red ji">*</div>联系人传真</div>
     <div class="inp">
        <el-input v-model="form.name"></el-input>
 </div>
  </div>
   <div class="boxinp">
    <div class="jii"><div class="red ji">*</div>联系人电话</div>
     <div class="inp">
        <el-input v-model="form.name"></el-input>
 </div>
  </div>
   <div class="boxinp">
    <div class="jii"><div class="red ji">*</div>联系人邮箱</div>
     <div class="inp">
        <el-input v-model="form.name"></el-input>
 </div>
  </div>
   <div class="boxinp">
    <div class="jii"><div class="red ji">*</div>联系人手机</div>
     <div class="inp">
        <el-input v-model="form.name"></el-input>
 </div>
  </div>
  
  <div class="yuyu"  @click="onSubmit">保存</div>
</el-form>

 </div>
</template>
<style scoped>
*{
  padding: 0;
  margin: 0;
  overflow: hidden;
overflow-y: hidden;
}
.home{
margin-top: 69px;
  /* margin-left: -1%; */
      margin-left: 8%;
}
.headtop{
  width: 100%;
    height: 25px;
    position: absolute;
     top: 50px;
     left: 183px;
    color: #ffffff;
    line-height: 20px;
     font-size: 13px;
  padding-left: 8px;
    background: #cccccc;
}
  .boxinp{
    width: 40%;
    height: 42px;
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
  .yuyu{
       color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
    padding: 15px;
    width: 70px;
    height: 9px;
    margin-left: 501px;
    margin-top: 54px;
    text-align: center;
    line-height: 9px;
    border-radius: 5px;
          margin-top: 30px;
    margin-left: 40%;
    /* border: 1px red solid; */

}
  .red{
    color: red;
  }
  .bao{
    margin-top: 3%;
    margin-left: 40%;
  }
</style>
<script>
  export default {
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
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
