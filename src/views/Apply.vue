
<template>
  <div class="about">
    <div class="headtop">新建入网申请</div>
    <div class="boxbtn">
      <div :class="isshow?'btn2':'btn1'" @click="show()">我是申請人</div>
      <div :class="isshow?'btn1':'btn2'" @click="show()">我是代理机构</div>
    </div>
    <div v-if="isshow" class="applicant">
      <Applicant></Applicant>
    </div>
    <div v-else class="applicant">
      <Agency></Agency>
    </div>
  </div>
</template>

<script>
import Applicant from '../components/tow/applicant';
import Agency from '../components/tow/agency';

export default {
  data() {
    return {
      isshow: true,
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
  components: {
    Applicant,Agency
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    show() {
      this.isshow = !this.isshow
    }
  }
}
</script>
<style scoped>

.headtop {
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
.boxbtn{
  width: 100%;
  /* border: 1px red solid; */
  margin-top: 3%;
  margin-left: 20%;
margin-top: 69px;
}
.btn1 {
  width: 30%;
  height: 35px;
  line-height: 35px;
  /* background: #2D96FE; */
  border: 1px solid #cccccc;
  text-align: center;
  display: inline-block;
}
.btn2 {
  width: 30%;
  height: 35px;
  line-height: 35px;
  background: #2D96FE;
  border: 1px solid #cccccc;
  text-align: center;
  display: inline-block;
}
.applicant{
  height: 100%;
    
  font-size: 13px;
  color: #837c7c;
  /* height: 800px; */
  /* border: 1px solid red; */
  
}
 
</style>

