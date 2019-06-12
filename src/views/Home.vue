<template>
  <el-container>
    <el-header>
      <div id="logo-box">
        <img src="../assets/img/heima.png" alt="" />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout()">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="menushow ? '65px' : '200px'">
        <div id="toggle_bar" @click="menushow = !menushow">
          |||
        </div>
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
          unique-opened
          :collapse="menushow"
          :collapse-transition="false"
          :default-active="$route.path"
          router
        >
          <el-submenu
            v-for="item in menuList"
            :key="item.id"
            :index="item.id + ''"
            :style="{ width: menushow ? '65px' : '200px' }"
          >
            <template slot="title">
              <i :class="'iconfont icon-' + iconList['ic' + item.id]"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item
              :index="'/' + item2.path"
              v-for="item2 in item.children"
              :key="item2.id"
            >
              <i class="el-icon-menu"></i>
              <span>{{ item2.authName }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  created() {
    this.getmenuList();
  },
  methods: {
    logout() {
      this.$confirm("确认要退出系统么？", "退出", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          window.sessionStorage.removeItem("token");
          this.$router.push("/login");
        })
        .catch(() => {});
    },
    async getmenuList() {
      var { data: dt } = await this.$http.get("menus");
      if (dt.meta.status !== 200) {
        return this.$message.error(dt.meta.msg);
      }
      this.menuList = dt.data;
    }
  },
  data() {
    return {
      menushow: false,
      menuList: [],
      iconList: {
        ic125: "users",
        ic103: "tijikongjian",
        ic101: "shangpin",
        ic102: "danju",
        ic145: "baobiao"
      }
    };
  }
};
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
  .el-header {
    background-color: #373d41;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
    #logo-box {
      display: flex;
      font-size: 22px;
      color: #fff;
      align-items: center;
      user-select: none;
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
    }
  }
  .el-aside {
    background-color: #333744;
    #toggle_bar {
      height: 25px;
      color: #fff;
      text-align: center;
      line-height: 25px;
      letter-spacing: 0.1em;
      background-color: #4a5064;
      font-size: 12px;
      user-select: none;
      cursor: pointer;
    }
  }
  .el-main {
    background-color: #eaedf1;
  }
}
</style>
