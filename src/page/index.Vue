<template>
  <div class="fillcontain">
    <el-container style="height: 100%">
      <el-aside>
        <el-row class="tac" style="height: 100%;">
          <el-col :span="24" style="min-height: 100%; background-color: #263238">
            <el-menu
              :default-active="defaultActive"
              style="min-height: 100%;"
              background-color="#263238"
              text-color="rgb(210, 218, 224)"
              active-text-color="#20a0ff"
              @open="handleOpen"
              @close="handleClose"
              router>
              <el-menu-item index="home"><i class="el-icon-menu"></i>首页</el-menu-item>
              <el-submenu index="2">
                <template slot="title"><i class="el-icon-document"></i>数据管理</template>
                <el-menu-item index="userList">用户列表</el-menu-item>
                <el-menu-item index="daily">日报发布</el-menu-item>
                <!--<el-menu-item index="foodList">食品列表</el-menu-item>-->
                <!--<el-menu-item index="orderList">订单列表</el-menu-item>-->
                <!--<el-menu-item index="adminList">管理员列表</el-menu-item>-->
              </el-submenu>
              <!--<el-submenu index="3">-->
                <!--<template slot="title"><i class="el-icon-plus"></i>分类管理</template>-->
                <!--<el-menu-item index="addShop">添加商铺</el-menu-item>-->
                <!--<el-menu-item index="addGoods">添加商品</el-menu-item>-->
              <!--</el-submenu>-->
              <!--<el-submenu index="4">-->
                <!--<template slot="title"><i class="el-icon-star-on"></i>图表</template>-->
                <!--<el-menu-item index="visitor">用户分布</el-menu-item>-->
                <!--&lt;!&ndash; <el-menu-item index="newMember">用户数据</el-menu-item> &ndash;&gt;-->
              <!--</el-submenu>-->
              <!--<el-submenu index="5">-->
                <!--<template slot="title"><i class="el-icon-edit"></i>编辑</template>-->
                <!--&lt;!&ndash; <el-menu-item index="uploadImg">上传图片</el-menu-item> &ndash;&gt;-->
                <!--<el-menu-item index="vueEdit">文本编辑</el-menu-item>-->
              <!--</el-submenu>-->
              <!--<el-submenu index="6">-->
                <!--<template slot="title"><i class="el-icon-setting"></i>设置</template>-->
                <!--<el-menu-item index="adminSet">管理员设置</el-menu-item>-->
                <!--&lt;!&ndash; <el-menu-item index="sendMessage">发送通知</el-menu-item> &ndash;&gt;-->
              <!--</el-submenu>-->
              <!--<el-submenu index="7">-->
                <!--<template slot="title"><i class="el-icon-warning"></i>说明</template>-->
                <!--<el-menu-item index="explain">说明</el-menu-item>-->
              <!--</el-submenu>-->
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-header>
          <MyHeader></MyHeader>
        </el-header>
        <el-main>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
    import MyMenu from '../components/menu.vue'
    import MyHeader from '../components/header.vue'
    export default {
        data () {
          return {
            list:[],
            activeIndex: '1',
            activeIndex2: '1'
          }
        },
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        },
        computed: {
          defaultActive: function(){
            return this.$route.path.replace('/', '');
          }
        },
        components:{MyMenu,MyHeader}
    }
</script>
<style>
  .el-menu{
    border-right: 1px solid rgb(38, 50, 56);
  }
  .el-header{
    padding-left: 0px;
  }
</style>
