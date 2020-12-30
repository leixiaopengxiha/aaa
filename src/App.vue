<template>
  <div>
    <div class="top">
      光电设备器材入网设定
    </div>
    <el-container>
      <el-aside width="184px">
        <div class="listitem">
          <el-tree
            :data="data"
            :props="defaultProps"
            @node-click="handleNodeClick"
            :highlight-current="true"
          ></el-tree>
        </div>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import routerdata from "./router/index";
export default {
  data() {
    return {
      data: [],
      // [
      //   {
      //     label: "补全企业信息",
      //     url: "/",
      //     children: [
      //       {
      //         label: "补全企业信息",
      //         url: "/Home",
      //       },
      //       {
      //         label: "查看企业信息",
      //         url: "/Home2",
      //       },
      //     ],
      //   },
      //   {
      //     label: "新建入网申请",
      //     url: "/Apply",
      //   },
      //   {
      //     label: "终止入网申请",
      //     url: "Four",
      //   },
      //   {
      //     label: "变更企业名称申请",
      //     url: "/Changeneme",
      //   },
      //   {
      //     label: "所有申请",
      //     children: [
      //       {
      //         label: "入网申请",
      //         url: "/Networkaccess",
      //       },

      //       {
      //         label: "入网认定申请",
      //         url: "/termination",
      //       },
      //       {
      //         label: "变更企业名称申请",
      //         url: "/Namechange",
      //       },
      //     ],
      //   },
      //   {
      //     label: "企业信息管理",
      //     url: "/agent",
      //   },
      // ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  mounted() {
    console.log(routerdata.options.routes);
    this.data = routerdata.options.routes;
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
      if (data.path) {
        this.$router.push(data.path);
      }
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
.top {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #fff;
  padding-left: 10px;
  background: #2468a9;
}

.el-aside {
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 10;
  overflow-y: hidden;
  background: #fff;
  background-color: #fff;
  color: #333;
  text-align: center;
  height: 100vh;
  overflow: hidden;
  border-right: 1px solid #cccccc;
  overflow: hidden;
}

.el-main {
  /* padding: 0;
  margin: 0;
  background-color: #ffffff;
  color: #333;
  text-align: center;
  height: 100vh;
  overflow: hidden;
  width: 100%; */
  overflow: hidden;
  width: 1100px;
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  margin-left: 184px;
  top: 40px;
  /* border: 1px red solid */
}
.el-tree-node__content {
  height: 50px !important;
}
</style>
